const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Companies = new Schema({
    date: { type: Date, default: Date.now },
    title: String,
    description: String,
    positions: String,
    locations: String,
    comments: String


});