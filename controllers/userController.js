const router = require('express').Router();
const {User} = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Create User

router.post('/register', function(req,res) {

    User.create({
        email: req.body.user.email,
        username: req.body.user.username,
        password: bcrypt.hashSync(req.body.user.password, 13)
    })
    .then(
        function userRegistered(user) {
            let token = jwt.sign({id: user.id, username: user.username}, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24});

            res.json({
                user: user,
                message: 'User successfully created!',
                sessionToken: token
            });
        }
    )
    .catch(err => res.status(500).json({ error: err, message: 'This is bullshit' }))
});


// User Login

router.post('/login', function(req, res) {

    User.findOne({
        where: {
            // email: req.body.user.email,
            username: req.body.user.username
        }
    })
    .then(function userLoggedIn(user) {
        if (user) {
            res.status(200).json({
                user: user,
                message: 'User successfully logged in!'
            })
        } else {
            res.status(500).json({ error: 'Cannot find user info.' })
        }
    })
    .catch(err => res.status(500).json({ error: err }))
});

module.exports = router;