'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING

  }, {});
  User.associate = function (models) {
    // A User has many Sales

  };
  return User;
};