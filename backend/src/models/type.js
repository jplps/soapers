'use strict';
module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define('Type', {
    name: DataTypes.STRING
  }, { sequelize, modelName: 'type' });
  Type.associate = function (models) {
    Type.belongsToMany(models.Purchase, { through: 'PurchaseType' });
  };
  return Type;
};