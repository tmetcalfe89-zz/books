const Books = require("../models/books");

const getAll = async (req, res, next) => {
  let results = await Books.find();
  res.send(results);
};

const add = async (req, res, next) => {
  let result = await Books.create(req.body);
  res.send(result);
};

module.exports = {
  getAll,
  add,
};
