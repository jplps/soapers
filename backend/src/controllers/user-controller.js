//const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');

const models = require('../models');

module.exports = {
	// Creating a user
	async create(req, res) {
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
	},
	// Reading a specific user
	async read(req, res) {
		try {
			const users = await models.User.findAll();

			return res.status(200).send({ users });
		} catch (err) {
			console.log(err);
			return res.status(400).send({ err });
		}
	},
	// Updating a specific user
	async update(req, res) { },
	// Deleting a specific user
	async delete(req, res) { }
}