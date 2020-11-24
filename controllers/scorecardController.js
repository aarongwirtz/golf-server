const express = require('express');
const router = express.Router();
const {Scores} = require('../models');

router.get('/user', (req, res) => res.send('Endpoint working.'));

