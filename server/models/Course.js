const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true, 
    trim: true,
  },
  courseDescription: {
    type: String,
    trim: true,
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  whatYouWillLearn: {
    type: String,
    trim: true,
  },
  courseContent: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
    }
  ],
  ratingAndReviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RatingAndReviews",
    }
  ],
  price: {
    type: Number,
    required: true, 
    min: 0,
  },
  thumbnail: {
    type: String,
    trim: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true, 
  },
  tag: {
    type: [String],
    required: true,
    default: [], 
  },
  studentsEnrolled: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    }
  ],
  instruction: {
    type: [String],
    default: [],
  },
  status: {
    type: String,
    enum: ["Draft", "Published"],
    default: "Draft",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

module.exports = mongoose.model("Course", courseSchema);
