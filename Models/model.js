const mongoose = require("mongoose");
// const autoIncrement = require('mongoose-auto-increment');

const userSchema = new mongoose.Schema({
    firstname : String,
    lastname : String,
    email: String,
    password: String,
    access_token: String
    

},{timestamps: true});
// autoIncrement.initialize(mongoose.connection)
// userSchema.plugin(autoIncrement.plugin,'User')

const User = new mongoose.model("User", userSchema)

module.exports = User;