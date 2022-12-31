const express = require('express')
const SignupUser = require('../Controller/usercontroller')
const SigninUser = require('../Controller/usercontroller')

const router = express.Router();

router.post("/signin",SigninUser)
router.post('/signup',SignupUser)

module.exports = router