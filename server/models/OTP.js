const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const emailTemplate = require("../mail/templates/emailVerificationTemplate");

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/, // basic email format validation
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 600, 
  },
});

// 🔔 Send verification email
async function sendVerificationEmail(email, otp) {
  try {
    const mailResponse = await mailSender(
      email,
      "Verification Email from StudyNotion",
      emailTemplate(otp)
    );
    console.log("Email sent successfully:", mailResponse.response);
  } catch (error) {
    console.log("Error occurred while sending email:", error);
    throw error;
  }
}

// 🧪 Pre-save middleware:  send email before saving the otp data into the database
otpSchema.pre("save", async function (next) {
  console.log("New OTP document saved to database");
  if (this.isNew) {
    await sendVerificationEmail(this.email, this.otp);
  }
  next();
});

const OTP = mongoose.model("OTP", otpSchema);

module.exports = OTP;
