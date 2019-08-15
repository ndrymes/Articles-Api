const mongoose = require('mongoose')
console.log(process.env.MONGODB_URL);

const url = process.env.MONGODB_URL
mongoose.connect(url,{useNewUrlParser:true,useCreateIndex:true})
    .then((data) => {
        // console.log('Mongo db connected successfully', data)
    }).catch((e) => {
        console.log(' monngo error');
        
    })
module.exports =mongoose;