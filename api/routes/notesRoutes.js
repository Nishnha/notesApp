'use strict';

exports.registerRoutes = function(app) {
	const notesController = require('../controllers/notesController');

	app.route('/notes')
		.get(notesController.getAllNotes);
		// .post(notesController.createNote);

	app.route('/notes/:noteId')
		.get(notesController.getNote);
		// .put(notesController.updateNote)
		// .delete(notesController.deleteNote);

	app.route('/')
		.get(notesController.default);
};