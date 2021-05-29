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
router.get('/hrcontrol', (req, res) =>{res.render('./crud')
} );

//booking
router.get('/booking', (req, res) =>{res.render('./booking')
} );


//calendar
router.get('/calendar', (req, res) =>{res.render('./calendar')
} );

//history
router.get('/history', (req, res) =>{res.render('./history')
} );

//rating
router.get('/rating', (req, res) =>{res.render('./rating')
} );


//rating system
router.get('/ratingsystem', (req, res) =>{res.render('./ratingsystem')
} );

//contactus
router.get('/contactus', (req, res) =>{res.render('./contactus')
} );

//employee login
router.get('/employeelogin', (req, res) =>{res.render('./employeelogin')
} );

//employee dash
router.get('/employeedash', (req, res) =>{res.render('./employeedash')
} );

//employee profile
router.get('/profile', (req, res) =>{res.render('./employeeprofile')
} );




module.exports = router

