const { Schema, model } = require("mongoose");

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  publishDate: {
    type: Date,
    required: false,
  },
});

module.exports = model("books", BookSchema);
