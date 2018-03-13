const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CompaniesSchema = new Schema({
    date: { type: Date, default: Date.now },
    title: String,
    description: String,
    positions: String,
    locations: String,
    comments: String


});

const CompaniesModel = mongoose.model('CompaniesModel', CompaniesSchema)