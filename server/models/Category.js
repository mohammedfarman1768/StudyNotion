const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50,
  },
  description: {
    type: String,
    default: "",
    trim: true,
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,  // this means array can be empty but cant contain the null or undefiend
    },
  ],
}, { timestamps: true });

module.exports = mongoose.model("Category", categorySchema);