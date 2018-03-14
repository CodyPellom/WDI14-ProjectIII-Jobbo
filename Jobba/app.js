//Dependancies

require('dotenv').config()
const mongoose = require('mongoose');
const express = require('express');
const app = express()
const logger = require('morgan');
const bodyParser = require('body-parser');

//Connect to Mongooser
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;



const db = mongoose.connection;

db.on('error', err => {
    console.log(err)
    });

db.on('open', () => {
console.log('Connected to MongoDB')
});


//MiddleWare
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/client/build`))

//Route references:
const BioModel = require('./db/schema/Bio-model')
const CompaniesModel = require('./db/schema/Companies-model')
const PositionsModel = require('./db/schema/Positions-model')


app.use('/', BioModel)
app.use('/', PositionsModel)
app.use('/', CompaniesModel)

//Setup our connection to react ..
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
});

const PORT = process.env.PORT || 3001 ;

app.listen(PORT, () => {
    console.log('Jobba is up and running on PORT ' + PORT)
});
