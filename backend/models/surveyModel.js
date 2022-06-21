const mongoose = require("mongoose");

const surveySchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    username: {
      type: String,
      required: [true, "Please add the survey creator's username"],
    },
    title: {
      type: String,
      required: [true, "Please add a title"],
    },
    desc: {
      type: String,
    },
    questions: {
      type: Array,
      required: [true, "Please add at least one question"],
    },
    isPublished: {
      type: Boolean,
      required: [true, "Please indicate whether the survey is published"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Survey", surveySchema);
