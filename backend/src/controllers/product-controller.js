const express = require('express');

const authMiddleware = require('../middlewares/auth');
const router = express.Router();

const models = require('../models');

// Creating a product
router.post('/create', async (req, res) => {
	// Get data of the body
	const { name, price } = req.body;

	try {
		const product = await models.Product.create({ name, price });
		// Send the result
		return res.status(200).send(product);
	} catch (err) {
		return res.status(400).send({ err });
	}
});

/*
// Reading a specific product
router.get('/read', async (req, res) => {
	try {
		const products = await models.product.findAll();

		return res.status(200).send({ products });
	} catch (err) {
		console.log(err);
		return res.status(400).send({ err });
	}
});

// Updating a specific product
router.put('/update', async (req, res) => {
	try {
		const products = await models.product.findAll();

		return res.status(200).send({ products });
	} catch (err) {
		console.log(err);
		return res.status(400).send({ err });
	}
});

// Deleting a specific product
router.delete('/delete', async (req, res) => {
	try {
		const products = await models.product.findAll();

		return res.status(200).send({ products });
	} catch (err) {
		console.log(err);
		return res.status(400).send({ err });
	}
});
*/

module.exports = app => app.use('/products', authMiddleware, router);