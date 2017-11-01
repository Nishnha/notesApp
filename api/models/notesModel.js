'use strict';

const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
	body: {
		type: String,
		required: 'Enter text'
	},
	timestamp: {
		type: Date,
		default: Date.now
	},
	status: {
		type: [{
			type: String,
			enum: ['pending', 'ongoing', 'completed']
		}],
		default: ['pending']
	}
});

module.exports = mongoose.model('Note', NoteSchema);