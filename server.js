const express = require("express");
const cors = require("cors");
const Connection = require("./Database/db")
const Routes = require("./Routes/route")


const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use('/user', Routes)
Connection()

app.listen(8080,()=>{
    console.log("started")
})