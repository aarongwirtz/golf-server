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

})

//create a scorecard
router.post('/create', (req,res) => {

})

//update 1 scorecard at id
router.put('/:id', (req,res) => {

})

//delete scorecard at target id
router.delete('/:id', (req,res) => {
    
})

module.exports = router