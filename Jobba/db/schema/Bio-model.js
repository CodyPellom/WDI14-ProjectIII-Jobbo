const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BioSchema = new Schema({
    location: String,
    img: Buffer, 
    education: String,
    experience: String,
    description: String
});

const BioModel = mongoose.model('BioModel', BioSchema);
