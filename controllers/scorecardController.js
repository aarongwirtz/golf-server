const express = require('express');
const router = express.Router();
const {Scorecard} = require('../models');

router.get('/golflove', (req, res) => {
    res.send("testing what I remember")
})

//get all scorecards
router.get('/', (req,res) => {

})

//get all of 1 user's scorecards
router.get('/:username', (req,res) => {
    Scorecard.findAll({ where: {userName: req.params.userName}})
        .then(scorecard => res.status(200).json(scorecard))
        .catch(err => res.status(500).json({ error: err}))
})

//create a scorecard
router.post('/create', (req,res) => {

})

//update 1 scorecard at id
router.put('/:id', (req,res) => {
    const query = req.params.id;
    Scorecard.update(req.body, {where: {id: query}})
        .then((scorecardUpdated) => {
            Scorecard.findOne({ where : {id: query} }).then((locatedUpdateScorecard) => {
                res.status(200).json({
                    scorecard: locatedUpdateScorecard,
                    message: "Scorecard updated successfully",
                    scorecardChanged: scorecardUpdated
                })
            })
        })
        .catch((err) => res.json({ error: err }))
});

//delete scorecard at target id
router.delete('/:id', (req,res) => {
    Scorecard.destroy({
        where: {id: req.params.id}
    })
    .then(scorecard => res.status(200).json(scorecard))
    .catch(err => res.json({ error: err}))
})

module.exports = router
