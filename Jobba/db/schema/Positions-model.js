const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Positions = new Schema({
    date: Date,
    title: String,
    Compensation: Number,
    comments: String
});
