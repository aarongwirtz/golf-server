require('dotenv').config();

let express = require('express');
let app = express();
const db = require('./db');

app.use(express.json())
db.sync();


app.listen(3000, function() {
    console.log('App listening on port 3000.');
})