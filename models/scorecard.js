module.exports = (sequelize, DataTypes) => {
    const Scorecard = sequelize.define('scorecard', {
        courseName: {
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

        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },

        userName: {
            type: DataTypes.STRING,
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
    })
}