
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



