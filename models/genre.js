"use strict";
module.exports = (sequelize, DataTypes) => {
  const genre = sequelize.define(
    "genre",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  genre.associate = function (models) {
    // associations can be defined here
    genre.hasMany(models.bookGenre);
  };
  return genre;
};
