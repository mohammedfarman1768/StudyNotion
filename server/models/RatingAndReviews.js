const mongoose = require("mongoose");

const ratingAndReviews = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  rating: {
    type: Number,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Course",
    index: true,  // Create an index on the course field to speed up queries
  },
}, { timestamps: true });

module.exports = mongoose.model("RatingAndReviews", ratingAndReviews);
