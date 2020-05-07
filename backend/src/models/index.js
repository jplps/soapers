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

// USER - name, email, pass
// A USER has many PURCHASEs
// A USER has many PAYMENTs

// PRODUCT - name, price, stock
// A PRODUCT belongs to many PURCHASEs

// PURCHASE - USER, TYPE, PRODUCT, quantity, date, total
// A PURCHASE belongs to one USER
// A PURCHASE has one PRODUCT
// A PURCHASE has one TYPE

// TYPE - name
// A TYPE belongs to many PURCHASEs

// TAX - name, value
// A TAX belongs to many PAYMENTs

// PAYMENT - USER, TAX, date, total, paid
// A PAYMENT belongs to one USER
// A PAYMENT has one TAX