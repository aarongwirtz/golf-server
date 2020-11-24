const router = require('express').Router();
const {User} = require('../models');

// Create User

router.post('/register', function(req,res) {

    User.create({
        email: req.body.user.email,
        username: req.body.user.username,
        password: req.body.user.password
    })
    .then(
        function userRegistered(user) {
            res.json({
                user: user
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