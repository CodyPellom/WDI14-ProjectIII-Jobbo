//Dependancies

require('dotenv').config()
const mongoose = require('mongoose');
const express = require('express');
const app = express()
const logger = require('morgan');
const bodyParser = require('body-parser');

//Connect to Mongooser
mongoose.connect(process.env.MONGODB_URI);


const db = mongoose.connection;

db.on('error', (err) => {
    console.log('mongoose error: ', err)
    });

db.on('connected', () => {
console.log('Connected to MongoDB')
});


//MiddleWare

app.use(express.static(`${__dirname}/client/build`))
app.use(bodyParser.json());



//set up routes from 'routes'
const BioModel = require('./routes/Bio-Routes')
app.use('/api/bio', BioModel)
const CompaniesModel = require('./routes/Companies-Routes')
app.use('/api/bio/:bioId/companies', CompaniesModel)
const PositionsModel = require('./routes/Positions-Routes')
app.use('/api/bio/:bioId/companies/positions', PositionsModel)

//Setup our connection to react ..
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})

//set up for Heroku to listen 
const PORT = process.env.PORT || 3001 

app.listen(PORT, () => {
    console.log('Jobba is up and running on PORT ' + PORT)
})
