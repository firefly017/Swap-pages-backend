"use strict";
module.exports = (sequelize, DataTypes) => {
  const book = sequelize.define(
    "book",
    {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      borrowCount: DataTypes.INTEGER,
      borrowerId: DataTypes.INTEGER,
      lenderId: DataTypes.INTEGER,
      genreId: DataTypes.INTEGER,
    },
    {}
  );
  book.associate = function (models) {
    // associations can be defined here
    // Book.belongsTo(models.User, {
    //   as: "owner",
    //   foreignKey: "ownerId",
    //   targetKey: "id",
    // });
    // Book.belongsTo(models.User, {
    //   as: "borrower",
    //   foreignKey: "borrowerId",
    //   targetKey: "id",
    // });
  };
  return book;
};
