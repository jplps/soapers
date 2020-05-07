'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const database = require('../config/postgres');

const db = {};

const sequelize = new Sequelize(database);

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

// user - email, pass
// A user has many sales
// A user has many purchases
// A user has many payments

// product - name, price, stock
// A product belongs to many sales
// A product belongs to many purchases

// purchase - user, product, quantity, date, total
// A purchase belongs to one user
// A purchase has one product

// sale - user, product, quantity, date, total
// A sale belongs to one user
// A sale has one product

// tax - name, value
// A tax belongs to many payments

// payment - user, tax, date, total, paid
// A payment belongs to one user
// A payment has one tax