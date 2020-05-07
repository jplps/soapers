'use strict';
module.exports = (sequelize, DataTypes) => {
  const Purchase = sequelize.define('Purchase', {
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    typeId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'type',
        key: 'id'
      }
    },
    productId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'product',
        key: 'id'
      }
    },
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