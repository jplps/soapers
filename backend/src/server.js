const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const routes = require('./routes');

// Building app
const app = express();

// Allowing cross origin
app.use(cors());

// Understanding req in json
app.use(bodyParser.json());

// Understanding params via url with special chars
app.use(bodyParser.urlencoded({ extended: false }));

// Working with cookies
app.use(cookieParser());

// Using routes
app.use(routes);

// Exposing port
app.listen(4000);