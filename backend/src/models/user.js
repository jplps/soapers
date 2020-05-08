'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING(128),
    email: DataTypes.STRING(128),
    password: DataTypes.STRING(64)
  }, {
    sequelize,
    modelName: 'user',
    freezeTableName: true
  });
  User.associate = function (models) {
    // Add userId to Purchase model
    User.hasMany(models.Purchase);
    // Add userId to Payment model
    User.hasMany(models.Payment);
  };
  return User;
};