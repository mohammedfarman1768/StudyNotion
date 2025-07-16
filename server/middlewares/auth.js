const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");

// Middleware to check if user is authenticated
exports.auth = async (req, res, next) => {
  try {
    console.log("Authorization middleware triggered");

    // Extract token
    let token =
      req.cookies?.token ||
      req.body?.token ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token is missing",
      });
    }

    // Verify token
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      console.log("JWT verification failed:", err);
      return res.status(401).json({
        success: false,
        message: "Token is invalid or expired",
      });
    }
  } catch (error) {
    console.error("Error in auth middleware:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong during authentication",
    });
  }
};

// Middleware to check role: Student
exports.isStudent = (req, res, next) => {
  try {
    if (req.user.accountType !== "Student") {
      return res.status(403).json({
        success: false,
        message: "Protected route: Students only",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Role verification failed",
    });
  }
};

// Middleware to check role: Instructor
exports.isInstructor = (req, res, next) => {
  try {
    if (req.user.accountType !== "Instructor") {
      return res.status(403).json({
        success: false,
        message: "Protected route: Instructors only",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Role verification failed",
    });
  }
};

// Middleware to check role: Admin
exports.isAdmin = (req, res, next) => {
  try {
    if (req.user.accountType !== "Admin") {
      return res.status(403).json({
        success: false,
        message: "Protected route: Admins only",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Role verification failed",
    });
  }
};
