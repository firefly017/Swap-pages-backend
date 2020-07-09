const authMiddleware = require("../auth/middleware");
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

router.get("/:id/", async (req, res, next) => {
  try {
    const books = await Books.findByPk(req.params.id);
    res.send(books);
  } catch (e) {
    next(e);
  }
});

router.post("/book/", authMiddleware, async (req, res, next) => {
  try {
    const userId = req.user.dataValues["id"];
    //  const books = await Books.findAll();
    // console.log(req.body);
    const newBook = await Books.create({
      title: req.body.title,
      author: req.body.author,
      imageUrl: req.body.imageUrl,
      ISBN: req.body.ISBN,
      description: req.body.description,
      userId,
    });
    res.send(newBook);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
