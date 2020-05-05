// Importing stuff to use
const express = require('express');

const userController = require('./controllers/user-controller');
const authController = require('./controllers/auth-controller');

const routes = express.Router();

// Authentication
routes.post('/auth/signup', authController.signUp);
routes.post('/auth/signin', authController.signIn);

// Users
routes.post('/users', userController.create);
routes.get('/users', userController.read);
routes.put('/users', userController.update);
routes.delete('/users', userController.delete);

module.exports = routes;