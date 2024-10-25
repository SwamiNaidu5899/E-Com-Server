const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
})

const userModel = mongoose.model('userDetails',userSchema)
module.exports = userModel