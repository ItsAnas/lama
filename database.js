const Mongoose = require('mongoose');

const databaseURI = `mongodb://ds233238.mlab.com:33238/lamateam`
const database = Mongoose.connect(databaseURI, { user: 'lamateam', pass: 'm0vefast' })

module.exports = database;