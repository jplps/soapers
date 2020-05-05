const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

//const routes = require('./routes');
const models = require('./models');

const app = express();

// Understanding req in json
app.use(bodyParser.json());
// Understanding params via url with special chars
app.use(bodyParser.urlencoded({ extended: false }));

// Working with cookies
app.use(cookieParser());

//app.use(routes);
app.use('/', async (req, res) => {
	try {
		const users = await models.User.findAll();

		return res.status(200).send({ users });
	} catch (err) {
		console.log(err);
		return res.status(400).send({ err });
	}
});

app.listen(4000);