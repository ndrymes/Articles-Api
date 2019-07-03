const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required:true,
    },
    
})
 var Articles = mongoose.model('Articles', ArticleSchema)
 module.exports = Articles;