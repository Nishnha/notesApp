'use strict';

const mongoose = require('mongoose');
const Note = require('mongoose').model('Note');

exports.getAllNotes = function(req, res) {
	Note.find({}, function(err, note) {
		if (err) {
			res.send(err);
		}
		console.log("Getting all notes");
		res.json(note);
	});
};

exports.createNote = function(req, res) {
	let newNote = new Note(req.body);
	console.log("Note created:" + req);
	newNote.save(function(err) {
		if (err) {
			res.send(err)
		}
	});
};

exports.getNote = function(req, res) {
	Note.findById(req.params.noteId, function(err, note) {
		if (err) {
			res.send(err);
		}
		res.json(note);
	});
};

exports.updateNote = function(req, res) {
	Note.findOneAndUpdate({_id: req.params.noteId}, req.body, {upsert: true}, function(err, note) {
		if (err) {
			res.send(err);
		}
		res.json(note);
	});
};

exports.deleteNote = function(req, res) {
	Note.remove({
		_id: req.params.noteId
	}, function(err, note) {
		if (err) {
			res.send(err);
		}
		res.json({ message: 'Note deleted' });
	}); 
};

exports.default = function(req, res) {
	res.json({ message: "Express server running" });
};