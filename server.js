const express = require("express");
const cors = require("cors");
const Connection = require("./Database/db")
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
const Routes = require("./Routes/route")


const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use('/user', Routes)
Connection()
// console.log(process.env.MongoDB_URI)

app.listen(8080,()=>{
    console.log("started")
})