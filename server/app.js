var express = require('express');
var db = require('./db');
var mysql = require('mysql');



// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set('port', 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }))

// Set up our routes
app.use('/', router);

// Serve the client files
app.use(express.static(__dirname + '/../client'));

app.use(express.static(__dirname + '../bower_components'));
//app.use(express.static(__dirname + '../bower_components'));
//app.use('/bower_components',  express.static(__dirname + '/bower_components'));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}

