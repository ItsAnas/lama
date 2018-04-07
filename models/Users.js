const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    lastname: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    skills: { type: Array, required: true },
    profilepic: { type: String, required: true },
    job: { type: String },
    biography: { type: String, required: true },
});

module.exports = mongoose.model('User', UserSchema);