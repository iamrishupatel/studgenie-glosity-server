const mongoose = require("mongoose");

const { Schema } = mongoose;

const NoticeModel = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      minlength: 20,
      maxlength: 512,
    },
    issuedBy: {
      type: String,
      required: true,
      enum: [
        "principal office",
        "exam dept",
        "physics dept",
        "chemistry dept",
        "math dept",
        "head boy",
        "head girl",
      ],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notice", NoticeModel);
