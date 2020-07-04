"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: DataTypes.INTEGER,
      locLat: DataTypes.DECIMAL,
      locLong: DataTypes.DECIMAL,
    },
    {}
  );
  user.associate = function (models) {
    // associations can be defined here
    user.hasMany(models.book);
    user.hasMany(models.borrowedBooks);
  };
  return user;
};
