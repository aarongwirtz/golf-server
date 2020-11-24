const {DataTypes} = require('sequelize');
const db = require('../db');


const Scorecard = db.define('scorecard', {
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    courseName: {
        type: DataTypes.STRING,
        allowNull: false
    },
     date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    conditions: {
        type: DataTypes.STRING,
        allowNull: false
    },
    courseLength: {
        type: DataTypes.STRING,
        allowNull: false
    },
    difficultyRating: {
        type: DataTypes.STRING,
        allowNull: false
    },
    h1Score: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    h2Score: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    h3Score: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    h4Score: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    h5Score: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    h6Score: {
        type: DataTypes.INTEGER,
                                                                                                                            
        allowNull: false
    },
    h7Score: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    h8Score: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    h9Score: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    h10Score: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    h11Score: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    h12Score: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    h13Score: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    h14Score: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    h15Score: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    h16Score: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    h17Score: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    h18Score: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    totalScore: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    h1Par: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    h2Par: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    h3Par: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    h4Par: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    h5Par: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    h6Par: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    h7Par: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    h8Par: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    h9Par: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    h10Par: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

    h11Par: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

    h12Par: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

    h13Par: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

    h14Par: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

    h15Par: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

    h16Par: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

    h17Par: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

    h18Par: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    totalPar: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

module.exports = Scorecard