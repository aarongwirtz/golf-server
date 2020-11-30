require('dotenv').config();

const express = require('express');
const db = require('./db');
const app = express();
app.use(require('./middleware/headers'))

const controllers = require('./controllers');

app.use(express.json())

db.sync();
//{force: true} -- this "drops" the table

app.use("/scorecard", controllers.scorecardcontroller)
app.use('/user', controllers.usercontroller);

app.listen(3000, function() {
    console.log(`App listening on ${process.env.PORT}`);
})

//App listening on port 3000