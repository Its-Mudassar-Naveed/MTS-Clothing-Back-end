const express = require('express')
const SignupUser = require('../Controller/usercontroller')
const SigninUser = require('../Controller/usercontroller')
const AllProducts = require('../Controller/productcontroller')
const AddProduct = require('../Controller/productcontroller')

const router = express.Router();

//Signin And Singup routes
router.post("/Signin",SigninUser)
router.post('/Signup',SignupUser)

//Products Routes
router.get("/allproducts", AllProducts)
router.post("/addproduct", AddProduct)

module.exports = router