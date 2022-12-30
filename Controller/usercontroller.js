const User = require('../Models/model')

module.exports = async (req,res)=>{
    try{
        const {email,password} =req.body;
        await User.findone({email:email},(err,user)=>{
            if(user){
               if(password === user.password){
                   res.send({message:"login sucess",user:user})
               }else{
                   res.send({message:"wrong credentials"})
                }
    }})
    }catch(err){
        res.status(404).json({message: err.message})
    }
}
module.exports = SignupUser = async (req,res)=>{
    try{
        const {firstname,lastname,email,password} =req.body;
        User.findOne({email:email},(err,user)=>{
            if(user){
                res.send({message:"user already exist"})
            }else {
                const user = new User({firstname,lastname,email,password})
                user.save(err=>{
                    if(err){
                        res.send(err)
                    }else{
                        res.send({message:"sucessfull"})
                    }
                })
    }})
    }catch(err){
        res.status(404).json({message: err.message})
    }
}