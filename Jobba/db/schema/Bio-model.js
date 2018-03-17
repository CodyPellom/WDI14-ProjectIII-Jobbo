const mongoose = require('mongoose');
const {PositionsSchema} = require('./Positions-model')
const {CompaniesSchema} = require('./Companies-model')


const Schema = mongoose.Schema;

const BioSchema = new Schema({
    name: String,
    location: String,
    education: String,
    experience: String,
    description: String,
companies: [CompaniesSchema],

positions: [PositionsSchema]

});

const BioModel = mongoose.model('BioModel', BioSchema);

module.exports = { BioModel, BioSchema }
