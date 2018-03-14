
//Dependacies
require('dotenv').config()
const mongoose = require('mongoose');


//Requirements for seends
const { CompaniesModel } = require('./schema/Companies-model');
const { BioModel } = require('./schema/Bio-model');
const { PositionsModel } = require('./schema/Positions-model');



//Connect to MongoDb Here:
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection
//Now set up the Promises as promises were recommended
//to keep things from getting overly complex.

CompaniesModel.remove().then(() => {
    //This is your dummy data that will be 
    //displayed on the application itself.
    const CompaniesTest1 = new CompaniesModel({
        date: Date.now,
        title: "General Assembly",
        description: "Located in Ponce City Market, GA is a school for Computer Science, Web Development and Design.",
        positions: "Front-Line, T-A's, Instructor",
        locations: "Atlanta, GA",
        notes: "Applied on January 15th 2018"
    })
    return CompaniesTest1.save()
}).then(() => {
    //This is your dummy data that will be 
    //displayed on the application itself.
    const PositionsTest1 = new PositionsModel({
        date: Date.now,
        title: "T.A.",
        Compensation: 60000,
        comments: "Recruiter seemed Receptive, Interview went well. Call back next week."
    })
    return PositionsTest1.save()
}).then(() => {
    //This is your dummy data that will be 
    //displayed on the application itself.
    const BioTest1 = new BioModel({
        name: "Kodi Bear Jenkins III",
        location: "Greater Atlanta Area ",
        education: "Graduated from Georgia State University",
        experience: "Graduated from General Assembly's WDI14",
        description: "Atlanta, GA Web Developer and Graphic Designer. Self Taught and Educated in CS and Web Development."
    })
    return BioTest1.save()
}).then(() => {
    db.close()
})

