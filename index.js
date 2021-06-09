const express = require("express");
const mongoose = require("mongoose");

const booksApi = require("./routes/books");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/books", booksApi);

mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3003);
