const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CompaniesSchema = new Schema({
    date: Date.now,
    title: String,
    description: String,
    positions: String,
    locations: String,
    notes: String


});

const CompaniesModel = mongoose.model('CompaniesModel', CompaniesSchema);

module.exports = CompaniesModel;

