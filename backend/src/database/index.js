// Setting up the connection
const Sequelize = require('sequelize');
const dbConfig = require('../config/postgres');

const connection = new Sequelize(dbConfig);

connection.import("../models/user.js");

module.exports = connection;