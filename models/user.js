const mongoose = require('mongoose')
// const bcrypt =require('bcrypt')
// const jwt = require('jsonwebtoken')


var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        Validate(value){
            if (!validator.isEmail(value)) {
                throw new Error('Invalid email')
            }
        }

    },
    priviledge: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    tokens:{
        type:String
    }

})

 var User = mongoose.model('User',userSchema)

 module.exports = User