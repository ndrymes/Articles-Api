const express = require('express')
const _ = require('lodash')
const router = express.Router()
const User = require('../models/user.js')
const Articles = require('../models/article')


 
 
router.post('/me',async (req,res) => {
  if (req.body.priviledge ==='admin') {
    var newuser = new User({
      ...req.body,
      tokens:process.env.ACCESS_KEY
    })
  }
  else{
    newuser = new User(req.body)
  }
  try {
    const user = await newuser.save()
    res.status(200).send({
      data:user,
      code:200,
      error:false,

    })
  } catch (error) {
res.status(400).send({
  error:true,
  message:error
})
  }
  
})
 router.get('/me/:id', async(req,res) => {
   const id = req.params.id

try {
    
  const user= await User.findById(id)
  if (!user) {
      res.status(400).send()
  }

   res.status(200).send(user)
} catch (error) {
res.status(400).send()
}

 })


 module.exports = router