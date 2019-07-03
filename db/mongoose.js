const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/TodoApp'
mongoose.connect(url,{useNewUrlParser:true,useCreateIndex:true})
    .then((data) => {
        // console.log('Mongo db connected successfully', data)
    }).catch((e) => {
        console.log(' monngo error');
        
    })
module.exports =mongoose;