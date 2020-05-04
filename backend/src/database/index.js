// Setting up the connection
const Sequelize = require('sequelize');
const dbConfig = require('../config/postgres');

//const User = require('../models/User');

const connection = new Sequelize(dbConfig);

//User.init(connection);
//User.associate(connection.models);

module.exports = connection;