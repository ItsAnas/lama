'use strict'

var Mongoose = require('mongoose');

const databaseURI = `mongodb://ds021036.mlab.com:21036/lamateam`
const database = Mongoose.connect(databaseURI, { user: 'lamateam', pass: 'm0vefast' })

export default database