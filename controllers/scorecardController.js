const express = require('express');
const router = express.Router();
const {Scorecard} = require('../models');

router.get('/golflove', (req, res) => {
    res.send("testing what I remember")
})

//get all scorecards
router.get('/', (req,res) => {
    Scorecard.findAll()
    .then(scorecard => res.status(200).json(scorecard))
    .catch(err => res,status(500).json({
        error: err
    }))
})
//get all of 1 user's scorecards
router.get('/:username', (req,res) => {

})

//create a scorecard
router.post('/create', (req,res) => {
    try{
        const {userName, courseName, date, conditions, courseLength, difficultyRating, h1Score, h2Score, h3Score, h4Score, h5Score, h6Score, h7Score, h8Score, h9Score, h10Score, h11Score, h12Score, h13Score, h14Score, h15Score, h16Score, h17Score, h18Score, totalScore, h1Par, h2Par, h3Par, h4Par, h5Par, h6Par, h7Par, h8Par, h9Par, h10Par, h11Par, h12Par, h13Par, h14Par, h15Par, h16Par, h17Par, h18Par, totalPar} = req.body;

        let newScore = await Scorecard.create({userName, courseName, date, conditions, courseLength, difficultyRating, h1Score, h2Score, h3Score, h4Score, h5Score, h6Score, h7Score, h8Score, h9Score, h10Score, h11Score, h12Score, h13Score, h14Score, h15Score, h16Score, h17Score, h18Score, totalScore, h1Par, h2Par, h3Par, h4Par, h5Par, h6Par, h7Par, h8Par, h9Par, h10Par, h11Par, h12Par, h13Par, h14Par, h15Par, h16Par, h17Par, h18Par, totalPar
        })
        res.status(200).json({
            score: newScore,
            message: "New Scorecard Has Been Created",
        })
    } catch (error){
        console.log(error);
        res.status(500).json({
            message: "Scorecard Failed To Create",
        })
    }
});

//update 1 scorecard at id
router.put('/:id', (req,res) => {

})

//delete scorecard at target id
router.delete('/:id', (req,res) => {
    
})

module.exports = router

Get all users scorecards, GET
Create personal scorecard, POST

