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

//Setup our Routes ..
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
});

const PORT = process.env.PORT || 3001 ;

app.listen(PORT, () => {
    console.log('Jobba is up and running on PORT ' + PORT)
});
