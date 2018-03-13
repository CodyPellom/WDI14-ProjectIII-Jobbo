
//Dependacies
require('dotenv').config()
const mongoose = require('mongoose');


//Requirements for seends
const CompaniesModel= require('./schema/Companies-model');
const BioModel = require('./schema/Bio-model');
const PositionsModel = require('./schema/Positions-model');



//Connect to MongoDb Here:
mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection

//Here is the errors, or successful connections logger
db.on('open', () => {
    console.log('connected to mongoDB')
})
db.on('error', (err) => {
    console.log(err)
})

//Here is the dummy data that will be displayed on your appliation

const CompaniesTest1 = new CompaniesModel({
    date: Date.now,
    title: String,
    description: String,
    positions: String,
    locations: String,
    notes: String
})

const PositionsTest1 = new PositionsModel({
    date: Date,
    title: String,
    Compensation: Number,
    comments: String
})

const BioTest1 = new BioModel ({
    location: String,
    img: Buffer, 
    education: String,
    experience: String,
    description: String
})


