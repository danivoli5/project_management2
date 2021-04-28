const express = require('express')
const router = express.Router()
const {ensureAuthenticated} = require('../config/auth')
//Login Page
router.get('/',(req, res) => res.render('welcome'))

//Dashboard
router.get('/dashboard',ensureAuthenticated,(req, res) => 
res.render('dashboard',{
    name : req.user.name
}))

router.get('/hrindex', (req, res) => res.render('./crud_hr/index'));

module.exports = router

