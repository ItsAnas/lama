var mongoose = require('mongoose');
const ProjectsSchema = mongoose.Schema({
    name: { type: String, required: true },
    auteur: { type: String, required: true },
    members: { type: Array, required: true },
});

module.exports = mongoose.model('Projects', ProjectsSchema);