'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING

  }, { sequelize, modelName: 'user' });
  User.associate = function (models) {
    User.hasMany(models.Purchase);
    User.hasMany(models.Payment);
  };
  return User;
};