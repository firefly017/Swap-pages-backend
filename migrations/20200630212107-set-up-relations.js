"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("books", "ownerId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("borrowedBooks", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("borrowedBooks", "bookId", {
      type: Sequelize.INTEGER,
      references: {
        model: "books",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("bookGenres", "bookId", {
      type: Sequelize.INTEGER,
      references: {
        model: "books",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("bookGenres", "genreId", {
      type: Sequelize.INTEGER,
      references: {
        model: "genres",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("books", "ownerId");
    await queryInterface.removeColumn("borrowedBooks", "userId");
    await queryInterface.removeColumn("borrowedBooks", "bookId");
    await queryInterface.removeColumn("bookGenres", "bookId");
    await queryInterface.removeColumn("bookGenres", "genreId");
  },
};
