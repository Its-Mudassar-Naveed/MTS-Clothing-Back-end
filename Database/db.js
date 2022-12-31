const mongoose = require('mongoose')

const Connection = async()=>{
mongoose.set('strictQuery', false)
mongoose.connect(`mongodb://taha:qazwsx123@ac-zrgkl7p-shard-00-00.m6o32zs.mongodb.net:27017,ac-zrgkl7p-shard-00-01.m6o32zs.mongodb.net:27017,ac-zrgkl7p-shard-00-02.m6o32zs.mongodb.net:27017/?ssl=true&replicaSet=atlas-o6gc85-shard-0&authSource=admin&retryWrites=true&w=majority`,{
       
useNewUrlParser:true,
    useUnifiedTopology:true
});()=>{
    console.log("connected to DB")
}
}
module.exports = Connection