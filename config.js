'use strict';

module.exports = {
    name: 'Notes App',
    version: '1.0.0',
    env: process.env.NODE_ENV || 'production',
    port: process.env.PORT || 3000,
    db: {
        uri: 'mongodb://localhost:27017/notesApp'
    }
}
