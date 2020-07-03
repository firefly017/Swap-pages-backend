"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "borrowedBooks",
      [
        {
          id: 1,
          date: new Date(),
          userId: 1,
          bookId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          date: new Date(),
          userId: 1,
          bookId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          date: new Date(),
          userId: 2,
          bookId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          date: new Date(),
          userId: 2,
          bookId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("borrowedBooks", null, {});
  },
};
