const express = require('express')
const app = express()
const mongoose = require('../db/mongoose')
const articles = require('../router/article.js')
const user = require('../router/user.js')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use('/articles', articles)
app.use('/user',user)
 

app.listen(3000, ()=> {
    console.log('server is connected');
    
})