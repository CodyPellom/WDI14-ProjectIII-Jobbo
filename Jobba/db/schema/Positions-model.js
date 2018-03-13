const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PositionsSchema = new Schema({
    date: Date,
    title: String,
    Compensation: Number,
    comments: String
});

//Compile model from schema!
const PositionsModel = mongoose.model('PositionsModel', PositionsSchema)