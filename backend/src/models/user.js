'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING(128),
    email: DataTypes.STRING(128),
    password: DataTypes.STRING(64)
  }, { sequelize, modelName: 'user' });
  User.associate = function (models) {
    User.hasMany(models.Purchase);
    User.hasMany(models.Payment);
  };
  return User;
};