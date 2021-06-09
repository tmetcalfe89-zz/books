const { Router } = require("express");

const books = require("../controllers/books");

const router = Router();

router.get("/", books.getAll);
router.post("/", books.add);

module.exports = router;
