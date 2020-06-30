"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "books",
      [
        {
          id: 1,
          title: "Sapiens:A Brief History of Humankind",
          author: "Yuval Noah Harrari",
          imageUrl:
            "https://www.bookspot.nl/images/active/carrousel/fullsize/9780062316097_front.jpg",
          ISBN: "144819069X",
          description:
            "Sapiens: A Brief History of Humankind is a book by Yuval Noah Harari, first published in Hebrew in Israel in 2011 based on a series of lectures Harari taught at The Hebrew University of Jerusalem, and in English in 2014.",
          borrowCount: 0,
          available: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          title: "The Winner Stands Alone",
          author: "Paulo Coelho",
          imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/51-hpHvd+TL.jpg",
          ISBN: "9780061872563",
          description:
            "The Winner Stands Alone is a novel by Brazilian writer Paulo Coelho, first published in 2008 under the Portuguese title O Vencedor está Só. The story is set at the Cannes Film Festival and roughly based upon the growing rise of what the author calls The Superclass.",
          borrowCount: 0,
          available: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          title: "The Book Thief",
          author: "Markus Zusak",
          imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/91pZEozf9qL.jpg",
          ISBN: "9780375831003",
          description:
            "The Book Thief is a historical novel by Australian author Markus Zusak, and is his most popular work. Published in 2005, The Book Thief became an international bestseller and was translated into 63 languages and sold 16 million copies. It was adapted into a 2013 feature film of the same name.",
          borrowCount: 0,
          available: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          title: "The Kite Runner",
          author: "Khaled Hosseini",
          imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/71nC7aQJoPL.jpg",
          ISBN: "9781408824856",
          description:
            "The Kite Runner is the first novel by Afghan-American author Khaled Hosseini. Published in 2003 by Riverhead Books, it tells the story of Amir, a young boy from the Wazir Akbar Khan district of Kabul, whose closest friend is Hassan. ",
          borrowCount: 0,
          available: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("books", null, {});
  },
};
