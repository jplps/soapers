const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Building app
const app = express();

// Allowing cross origin
app.use(cors({
	origin: 'http://localhost:3000',
	credentials: true
}));

// Understanding req in json
app.use(bodyParser.json());

// Understanding params via url with special chars
app.use(bodyParser.urlencoded({ extended: false }));

// Working with cookies
app.use(cookieParser());

// Using routes
require('./controllers/index')(app);

// Exposing port
app.listen(4000);