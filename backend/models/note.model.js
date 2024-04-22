const mongoose = require("mongoose");

const noteSchema = mongoose.Schema(
  {
    text: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: false,
    },
    tags: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("note", noteSchema);
