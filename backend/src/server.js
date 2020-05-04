const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

//const routes = require('./routes');

require('./database/index');

const app = express();

// Understanding req in json
app.use(bodyParser.json());
// Understanding params via url with special chars
app.use(bodyParser.urlencoded({ extended: false }));

// Working with cookies
app.use(cookieParser());

//app.use(routes);
app.use('/', (req, res) => {
	return res.json('Yo');
});

app.listen(4000);