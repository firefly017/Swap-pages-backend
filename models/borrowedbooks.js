'use strict';
module.exports = (sequelize, DataTypes) => {
  const borrowedBooks = sequelize.define('borrowedBooks', {
    date: DataTypes.DATE
  }, {});
  borrowedBooks.associate = function(models) {
    // associations can be defined here
  };
  return borrowedBooks;
};