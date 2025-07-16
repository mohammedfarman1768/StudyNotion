const User = require("../models/User");
const OTP = require("../models/OTP");
const Profile = require("../models/Profile");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mailSender = require("../utils/mailSender");
const { passwordUpdated } = require("../mail/templates/passwordUpdate");

require("dotenv").config();

// =================== SEND OTP ===================
exports.sendOTP = async (req, res) => {
  try {
    const { email } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already registered",
      });
    }

    let otp;
    let existingOtp;

    do {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });
      existingOtp = await OTP.findOne({ otp });
    } while (existingOtp);

    await OTP.create({ email, otp });

    return res.status(200).json({
      success: true,
      message: "OTP sent successfully",
      otp, // Remove in production!
    });
  } catch (error) {
    console.error("SEND OTP ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Error sending OTP",
    });
  }
};

// =================== SIGNUP ===================
exports.signUp = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      accountType,
      contactNumber,
      otp,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !otp
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already registered",
      });
    }

    const recentOtp = await OTP.find({ email })
      .sort({ createdAt: -1 })
      .limit(1);

    if (recentOtp.length === 0 || recentOtp[0].otp !== otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired OTP",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const profile = await Profile.create({
      gender: null,
      dateOfBirth: null,
      about: null,
      contactNumber: contactNumber || null,
    });

    const approved = accountType === "Instructor" ? false : true;

    const user = await User.create({
      firstName,
      lastName,
      email,
      contactNumber,
      password: hashedPassword,
      accountType,
      approved,
      additionalDetails: profile._id,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
    });

    return res.status(200).json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.error("SIGNUP ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "User cannot be registered",
    });
  }
};

// =================== LOGIN ===================
exports.login = async (req, res) => {
  try {
    console.log("🔐 [LOGIN] Hit login endpoint");

    const { email, password } = req.body;
    console.log("📩 [LOGIN] Request body:", req.body);

    if (!email || !password) {
      console.log("❌ [LOGIN] Missing email or password");
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const user = await User.findOne({ email })
      .select("+password")
      .populate("additionalDetails");

    if (!user) {
      console.log("❌ [LOGIN] User not found:", email);
      return res.status(401).json({
        success: false,
        message: "User not found. Please sign up.",
      });
    }

    console.log("👤 [LOGIN] User fetched from DB:", user.email);

    if (!user.password) {
      console.log("❌ [LOGIN] Password is null in DB for this user");
      return res.status(500).json({
        success: false,
        message: "User has no password set.",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log("❌ [LOGIN] Incorrect password");
      return res.status(401).json({
        success: false,
        message: "Incorrect password",
      });
    }

    console.log("✅ [LOGIN] Password is correct");

    const payload = {
      email: user.email,
      id: user._id,
      accountType: user.accountType,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    user.token = token;
    user.password = undefined;

    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    return res.cookie("token", token, options).status(200).json({
      success: true,
      token,
      user,
      message: "User logged in successfully",
    });
  } catch (error) {
    console.error("🔥 [LOGIN] Error occurred:", error);
    return res.status(500).json({
      success: false,
      message: "Login failed. Please try again.",
    });
  }
};

// =================== CHANGE PASSWORD ===================
exports.changePassword = async (req, res) => {
  try {
    const userDetails = await User.findById(req.user.id).select("+password");
    const { oldPassword, newPassword, confirmPassword } = req.body;

    if (!oldPassword || !newPassword || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const isOldPasswordValid = await bcrypt.compare(
      oldPassword,
      userDetails.password
    );

    if (!isOldPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Old password is incorrect",
      });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "New passwords do not match",
      });
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    await User.findByIdAndUpdate(
      req.user.id,
      { password: hashedNewPassword },
      { new: true }
    );

    try {
      await mailSender(
        userDetails.email,
        passwordUpdated(
          userDetails.email,
          `Password updated for ${userDetails.firstName} ${userDetails.lastName}`
        )
      );
    } catch (mailErr) {
      console.error("Error sending email:", mailErr);
    }

    return res.status(200).json({
      success: true,
      message: "Password changed successfully",
    });
  } catch (error) {
    console.error("CHANGE PASSWORD ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
