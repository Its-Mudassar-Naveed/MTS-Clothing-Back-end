const mongoose = require('mongoose')

const Connection = async()=>{
mongoose.set('strictQuery', false)
mongoose.connect("mongodb://localhost:27017/auth",{
    useNewUrlParser:true,
    useUnifiedTopology:true
});()=>{
    console.log("connected to DB")
}
}
module.exports = Connection