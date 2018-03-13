require('dotenv').config()
const mongoose = require('mongoose');
const express = require('express');
const app = express()
const logger = require('morgan');
const bodyParser = require('body-parser');


mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;



const db = mongoose.connection;

db.on('error', err => {
    console.log(err)
    });

db.on('open', () => {
console.log('Connected to MongoDB')
});



app.use(logger('dev'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("hello, wurld")
});

const PORT = process.env.PORT || 3001 ;

app.listen(PORT, () => {
    console.log('Jobba is up and running on PORT ' + PORT)
});
