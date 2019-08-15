const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema({
    topic:{
        type:String,
        required: true
    },
    content:{
        type:String,
        required:true,
    },
    
})
 var Articles = mongoose.model('Articles', ArticleSchema)
 module.exports = Articles;