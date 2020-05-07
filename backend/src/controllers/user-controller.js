const express = require('express');
const bcrypt = require('bcryptjs');

const authMiddleware = require('../middlewares/auth');
const router = express.Router();

const models = require('../models');

// Creating a user
router.post('/create', async (req, res) => {
	// Get data of the body
	const { email, password } = req.body;

	try {
		// Hash the pass to store it
		const pass = await bcrypt.hash(password, 10);
		const user = await models.User.create({ email, password: pass });
		// Send the result
		return res.status(200).send(user);
	} catch (err) {
		return res.status(400).send({ err });
	}
});

// Reading a specific user
router.get('/read', async (req, res) => {
	// Check logged
	if (!req.user_id) {
		throw new Error("Você precisa estar logado.")
	}

	try {
		const users = await models.User.findAll();

		return res.status(200).send({ users });
	} catch (err) {
		console.log(err);
		return res.status(400).send({ err });
	}
});

module.exports = app => app.use('/users', authMiddleware, router);