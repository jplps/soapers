const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

const models = require('../models');
const authConfig = require('../config/auth');

const signJWT = (user, res) => {
	// Sign jwt token
	const token = jwt.sign(
		{ id: user.id },
		authConfig.secret,
		{ expiresIn: 86400 },
	);

	// Set the cookie with the token
	res.cookie('token', token, { httpOnly: true });

	// Return the user & token
	return res.status(200).send({
		user: {
			id: user.id,
			name: user.name,
			email: user.email,
		},
		token
	});
}

// Register new user
router.post('/signup', async (req, res) => {
	const { email } = req.body;

	try {
		// See if there's not a user with that email
		if (await models.User.findOne({ where: { email } })) {
			return res.status(200).send({ err: 'Já existe um usuário com este e-mail.' })
		}
		// Store hashed pass
		const password = await bcrypt.hash(req.body.password, 10);

		// Creating the user in the db
		const user = await models.User.create({ email, password });

		// Sign the user in
		return signJWT(user, res);
	} catch (err) {
		// Let error run in console and send a message
		console.log(err);
		return res.status(200).send({ err: 'Registro de usuário falhou. Veja o console do Banco de Dados para mais informações sobre o erro.' });
	}
});

// Sign user in the application
router.post('/signin', async (req, res) => {
	const { email, password } = req.body;

	try {
		// Check user in the db
		const user = await models.User.findOne({
			where: { email }
		});

		// Treat not found
		if (!user) {
			return res.status(200).send({ err: 'Usuário não encontrado.' });
		}

		// Compare passwords
		if (!await bcrypt.compare(password, user.password)) {
			return res.status(200).send({ err: 'Senha inválida.' });
		}

		// Sign the user in
		return signJWT(user, res);
	} catch (err) {
		console.log(err);
		return res.status(400).send({ err });
	}
});

// Sign user out of the application
router.post('/signout', async (req, res) => {
	res.clearCookie('token');
	return res.status(200).send({ message: 'Até breve!' })
});

module.exports = app => app.use('/auth', router)