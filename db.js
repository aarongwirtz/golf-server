const {Sequelize} = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL, {
<<<<<<< HEAD
    dialect: 'postgres'
=======
    dialect: 'postgres',
>>>>>>> 781a5e5ffb87b1efbd91ef3f35d7107553a3033f
});

module.exports = db;