require('dotenv').config();

const express = require('express');
const db = require('./db');
const app = express();
app.use(require('./middleware/headers'))

const controllers = require('./controllers');

app.use(express.json())

app.use("/scorecard", controllers.scorecardcontroller)
app.use('/user', controllers.usercontroller);


db.authenticate()
.then(() => db.sync()) // => {force:true}
.then(() => {
    app.listen(process.env.PORT, () => console.log(`[Server:] App is listening on Port ${process.env.PORT}`));
    })
    .catch((err) => {
        console.log("[server:] Server Crashed");
        console.error(err);

    })

