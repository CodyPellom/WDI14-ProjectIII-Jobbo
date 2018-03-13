const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bio = new Schema({
    location: String,
    img: Buffer, 
    education: String,
    experience: String,
    description: String
});