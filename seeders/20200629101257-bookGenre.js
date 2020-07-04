"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "bookGenres",
      [
        {
          id: 1,
          date: new Date(),
          bookId: 1,
          genreId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          date: new Date(),
          bookId: 2,
          genreId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          date: new Date(),
          bookId: 3,
          genreId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          date: new Date(),
          bookId: 4,
          genreId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("bookGenres", null, {});
  },
};
