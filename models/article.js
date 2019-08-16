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
ArticleSchema.methods.toJSON = function () {
    var article = this
    const newUser = article.toObject()
    delete newUser.password
    delete newUser.tokens
    return newUser
}
 var Articles = mongoose.model('Articles', ArticleSchema)
 module.exports = Articles;