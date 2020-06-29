'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    locLat: DataTypes.DECIMAL,
    locLong: DataTypes.DECIMAL
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};