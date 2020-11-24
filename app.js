require('dotenv').config();

const express = require('express');
const db = require('./db');
const app = express();

const controllers = require('./controllers');

app.use(express.json())

db.sync();


app.listen(3000, function() {
    console.log('App listening on port 3000.');
})