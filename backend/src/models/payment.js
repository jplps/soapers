'use strict';
module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define('Payment', {
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    taxId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'tax',
        key: 'id'
      }
    },
    date: DataTypes.DATEONLY,
    total: DataTypes.DOUBLE,
    paid: DataTypes.BOOLEAN
  }, { sequelize, modelName: 'payment' });
  Payment.associate = function (models) {
    Payment.belongsTo(models.User);
    Payment.hasOne(models.Tax);
  };
  return Payment;
};