'use strict';
module.exports = (sequelize, DataTypes) => {
  const book = sequelize.define('book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    ISBN: DataTypes.STRING,
    description: DataTypes.TEXT,
    borrowCount: DataTypes.INTEGER,
    available: DataTypes.BOOLEAN
  }, {});
  book.associate = function(models) {
    // associations can be defined here
  };
  return book;
};