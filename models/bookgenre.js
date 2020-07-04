"use strict";
module.exports = (sequelize, DataTypes) => {
  const bookGenre = sequelize.define(
    "bookGenre",
    {
      date: DataTypes.DATE,
    },
    {}
  );
  bookGenre.associate = function (models) {
    // associations can be defined here
    bookGenre.belongsTo(models.book);
    bookGenre.belongsTo(models.genre);
  };
  return bookGenre;
};
