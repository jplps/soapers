'use strict';
module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define('Payment', {
    date: DataTypes.DATE,
    total: DataTypes.DOUBLE,
    paid: DataTypes.BOOLEAN
  }, { sequelize, modelName: 'payment' });
  Payment.associate = function (models) {
    Payment.belongsTo(models.User);
    Payment.hasOne(models.Tax);
  };
  return Payment;
};