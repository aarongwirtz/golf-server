const {DataTypes} = require('sequelize');
const db = require('../db');

const Scores = db.define('scores', {
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
        alllowNull: false
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
})

module.exports = Scores