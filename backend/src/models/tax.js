'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tax = sequelize.define('Tax', {
    name: DataTypes.STRING(128),
    value: DataTypes.DOUBLE
  }, { sequelize, modelName: 'tax' });
  Tax.associate = function (models) {
    Tax.belongsToMany(models.Payment, { through: 'TaxPayment' })
  };
  return Tax;
};