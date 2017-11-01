'use strict';

/**
 * Module Dependencies
 */
const express = require('express'),
	config = require('./config'),
	MongoClient = require('mongodb').MongoClient,
 	routes = require('./api/routes/notesRoutes'),
	Note = require('./api/models/notesModel'),
	bodyParser = require('body-parser');

/**
 * Configure express
 */
const app = express();
app.listen(config.port);
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
routes.registerRoutes(app); // register the routes
app.use(function(req, res) { // add 404 error for all other routes
	res.status(404).send( {url: req.originalUrl + ' not found'} );
});

console.log("NotesApp Express API server started on port: " + config.port + ".");

/**
 * Connect to MongoDB server
 */
MongoClient.connect(config.db.uri, function(err, db) {
	if (err) {
		console.error("An error occured while connecting to MongoDB: " + err);
		process.exit(1);
	}
	console.log("Succssfully connected to MongoDB.");

	db.close();
});

