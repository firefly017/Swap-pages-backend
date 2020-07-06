const { Router } = require("express");
const Books = require("../models").book;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const books = await Books.findAll();
    res.send(books);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
