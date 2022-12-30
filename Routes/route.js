const express = require('express')
const SignupUser = require('../Controller/usercontroller')
const SigninUser = require('../Controller/usercontroller')

const router = express.Router();

router.post("/Signin",SigninUser)
router.post('/Signup',SignupUser)

module.exports = router