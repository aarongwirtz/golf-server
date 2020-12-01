require('dotenv').config();

const express = require('express');
const db = require('./db');
const app = express();
app.use(require('./middleware/headers'))

const controllers = require('./controllers');

app.use(express.json())


app.use("/scorecard", controllers.scorecardcontroller)
app.use('/user', controllers.usercontroller);

<<<<<<< HEAD

db.authenticate()
.then(() => db.sync()) // => {force:true}
.then(() => {
    app.listen(process.env.PORT, () => console.log(`[Server:] App is listening on Port ${process.env.PORT}`));
    })
    .catch((err) => {
        console.log("[server:] Server Crashed");
        console.error(err);
    })
=======
app.listen(3000, function() {
    console.log(`App listening on ${process.env.PORT}`);
})

//App listening on port 3000
>>>>>>> 781a5e5ffb87b1efbd91ef3f35d7107553a3033f
