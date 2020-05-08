'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Payment', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      total: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      paid: {
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Payment');
  }
};