"use strict";
module.exports = (sequelize, DataTypes) => {
  const book = sequelize.define(
    "book",
    {
      title: { type: DataTypes.STRING, allowNull: false },
      author: { type: DataTypes.STRING, allowNull: false },
      imageUrl: { type: DataTypes.STRING, allowNull: false },
      ISBN: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.TEXT, allowNull: false },
      borrowCount: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      loclat: DataTypes.DECIMAL,
      loclong: DataTypes.DECIMAL,
    },
    {}
  );
  book.associate = function (models) {
    // associations can be defined here
    book.belongsTo(models.user);
    book.hasMany(models.bookGenre);
    book.hasMany(models.borrowedBooks);
    // book.hasOne(models.user, {
    //   through: "borrowedbook",
    //   foreignKey: "userId",
    // });
    // book.belongsToMany(models.genre, {
    //   through: "bookgenres",
    //   foreignKey: "genreId",
    // });
    // book.belongsToMany(models.user, {
    //   through: "borrowedbooks",
    //   foreignKey: "userId",
    // });
  };
  return book;
};
