'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING(128),
    price: DataTypes.DOUBLE,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product',
    freezeTableName: true
  });
  Product.associate = function (models) {
    Product.belongsToMany(models.Purchase, { through: 'PurchaseProduct' });
  };
  return Product;
};