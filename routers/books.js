const authMiddleware = require("../auth/middleware");
const { Router } = require("express");
const Sequelize = require("sequelize");

const Books = require("../models").book;

const router = new Router();
const Op = Sequelize.Op;

router.get("/", async (req, res, next) => {
  try {
    const books = await Books.findAll();
    res.send(books);
  } catch (e) {
    next(e);
  }
});

router.get("/search/", async (req, res, next) => {
  const lat = req.query.lat;
  const lng = req.query.lng;

  let qry = {
    where: {
      [Op.or]: [
        {
          title: {
            [Op.iLike]: "%" + req.query.keyword + "%",
          },
        },
        {
          author: {
            [Op.iLike]: "%" + req.query.keyword + "%",
          },
        },
      ],
    },
  };

  if (!!lat && !!lng) {
    qry = {
      ...qry,
      attributes: [
        ...Object.keys(Books.rawAttributes),
        [
          Sequelize.literal(
            "6371 * acos(cos(radians(" +
              lat +
              ")) * cos(radians(loclat)) * cos(radians(" +
              lng +
              ") - radians(loclong)) + sin(radians(" +
              lat +
              ")) * sin(radians(loclat)))"
          ),
          "distance",
        ],
      ],
      order: Sequelize.col("distance"),
    };
  }
  try {
    console.log(req.query.keyword);

    let books = await Books.findAll(qry);
    console.log(books);
    // const books = await Books.findByPk(req.params.id);
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
    console.log(e);
    next(e);
  }
});

module.exports = router;
