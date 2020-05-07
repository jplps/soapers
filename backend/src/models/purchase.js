'use strict';
module.exports = (sequelize, DataTypes) => {
  const Purchase = sequelize.define('Purchase', {
    quantity: DataTypes.INTEGER,
    date: DataTypes.DATEONLY,
    total: DataTypes.DOUBLE
  }, { sequelize, modelName: 'purchase' });
  Purchase.associate = function (models) {
    Purchase.belongsTo(models.User);
    Purchase.hasOne(models.Product);
    Purchase.hasOne(models.Type);
  };
  return Purchase;
};