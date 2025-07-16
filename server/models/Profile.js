const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
  },

  dateOfBirth: {
    type: Date,
  },

  about: {
    type: String,
    trim: true,
  },

  contactNumber: {
    type: String, // changed from Number to String for better flexibility
    trim: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Profile", profileSchema);

