const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const models = require('../models');
const authConfig = require('../config/auth');

module.exports = {
	// Register new user
	async signUp(req, res) {
		const { email } = req.body;

		try {
			// See if there's not a user with that email
			if (await models.User.findOne({ where: { email } })) {
				return res.status(400).send({ err: 'A user with this email already exists.' })
			}
			// Store hashed pass
			const password = await bcrypt.hash(req.body.password, 10);

			// Creating the user in the db
			const user = await models.User.create({ email, password });

			// Returning the user to the browser
			return res.status(200).send(user);
		} catch (err) {
			console.log(err);
			return res.status(400).send({ err: 'User registration failed. See DB console for more info about the error.' });
		}
	},

	async signIn(req, res) {
		const { email, password } = req.body;

		try {
			const user = await User.findOne({
				where: { email }
			});

			if (!user) {
				return res.status(400).send({ err: 'User not found.' });
			}

			if (!await bcrypt.compare(password, user.password)) {
				return res.status(400).send({ err: 'Invalid password.' });
			}

			const token = jwt.sign(
				{ id: user.id },
				authConfig.secret,
				{ expiresIn: 86400 },
			);

			res.cookie('token', token, { httpOnly: true });

			return res.status(200).send({
				user: {
					id: user.id,
					name: user.name,
					email: user.email,
				},
				token
			});
		} catch (err) {
			console.log(err);
			return res.status(400).send({ err });
		}
	},
};