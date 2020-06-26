"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "books",
      [
        {
          id: 1,
          title: "Sapiens",
          author: "Yuval Noah Harrari",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          title: "The Winner Stands Alone",
          author: "Paulo Coelho",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          title: "The Book Thief",
          author: "Markus Zusak",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          title: "The Kite Runner",
          author: "Khaled Hosseini",
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
