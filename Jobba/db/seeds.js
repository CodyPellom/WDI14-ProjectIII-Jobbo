
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
    title: "General Assembly",
    description: "Located in Ponce City Market, GA is a school for Computer Science, Web Development and Design.",
    positions: "Front-Line, T-A's, Instructor",
    locations: "Atlanta, GA",
    notes: "Applied on January 15th 2018"
});

const PositionsTest1 = new PositionsModel({
    date: Date.now,
    title: "T.A.",
    Compensation: 60000,
    comments: "Recruiter seemed Receptive, Interview went well. Call back next week."
})

const BioTest1 = new BioModel ({
    name: "Kodi Bear Jenkins III",
    location: "Greater Atlanta Area ",
    img: "https://imgur.com/codypellom/gB10748Jh18.png", 
    education: "Graduated from Georgia State University",
    experience: "Graduated from General Assembly's WDI14",
    description: "Atlanta, GA Web Developer and Graphic Designer. Self Taught and Educated in CS and Web Development."
})

//Begin saving the dummyData
CompaniesModel.remove().then(() => {
    return CompaniesModel.insert([ CompaniesTest1 ])
}).then(() => {
    console.log('Saved CompaniesTest1')
    db.close()
}).catch((err) => {
    console.log(err)
    db.close()
})


PositionsModel.remove().then(() => {
    return PositionsModel.insert([ PositionsTest1 ])
}).then(() => {
  console.log('Saved PositionsTest1')
  db.close()
}).catch((err) => {
    console.log(err)
    db.close()
})


BioModel.remove().then(() => {
    return BioModel.insert([ BioTest1 ])
}).then(() => {
    console.log('Saved BioTest1')
    db.close()
}).catch((err) => {
    console.log(err)
    db.close()
})







