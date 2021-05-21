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

//hr login
router.get('/hrlogin1', (req, res) =>{res.render('./hrlogin')} );

//crud
router.get('/hrcontrol', (req, res) =>{res.render('./crud')} );


module.exports = router

