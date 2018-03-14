const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BioSchema = new Schema({
    name: String,
    location: String,
    education: String,
    experience: String,
    description: String
});

const BioModel = mongoose.model('BioModel', BioSchema);

module.exports = { BioModel }
