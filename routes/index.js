const express = require('express')
const router = express.Router()
const {ensureAuthenticated} = require('../config/auth')
const mongoose = require('mongoose');

//User model
const User = require('../models/User')


//Login Page
router.get('/',(req, res) => res.render('welcome'))

//Dashboard
router.get('/dashboard',ensureAuthenticated,(req, res) => 
res.render('dashboard',{
    name : req.user.name
}))

//HR index
router.get('/hrindex', (req, res) => res.render('./crud_hr/index'));

// User actions

// Profile page
router.get('/profile', ensureAuthenticated, (req, res) =>
res.render('profile', {
    name: req.user.name,
    email: req.user.email
}));

// Profile edit submit
router.post('/profile',
    (req, res) => {
        const { name, email } = req.body;

        let errors = [];

        User.findOne({ email: email })
        .then(user => {
                if (user) {
                    errors.push({ msg: 'A user with this email already exists' });
                }
            })
        .catch(err => console.log(err));

        if (errors.length > 0) {
            res.render('profile', { errors, name, email });
        } else {
            User.findOneAndUpdate({ email: req.user.email }, { name: name, email: email}, {new: true});
        }
    }
);

module.exports = router

