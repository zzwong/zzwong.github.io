/**
 * Module dependencies
 */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

/**
 * Controllers (route handlers).
 */
const homeController = require('./controllers/home');


/**
 * Create express server
 */
const app = express();

/**
 * express configs
 */
app.set('port', 8080);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public'), {maxAge: 31557600000}));


/**
 * Primary app routes
 */
app.get('/', homeController.index);



app.listen(8080, ()=> {
	console.log('express server listening on port 8080 ');
});
module.exports = app;
