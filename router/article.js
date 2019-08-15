const Articles =require('../models/article')
const auth = require('../middleware/auth')
const express = require('express')
 const router = express.Router()
 router.post('/me/:email',auth, async(req,res) => {
    const {topic,content} =req.body
    const params ={
        topic,
        content
    }
    //    console.log(allowedInput);
   
    console.log(req.body);
    console.log(req.headers.code)
    var newarticles = new Articles(params)
    try {
        
      const articles= await newarticles.save()
       res.status(200).send({
           data:articles,
           code:200,
           error:false
       })
    } catch (error) {
    res.status(400).send({
        error: true,
        message: error
    })
    }
    
     })
     router.get('/all', async(req,res) => {
         
         
        try {
            const articles =  await Articles.find()
         res.send(articles)
          if (!articles) {
              res.status(400).send()
          }
          res.status(200).send(articles)
        } catch (error) {
            res.status(400).send()
        }
         

     })

router.delete('/delete/:id/:email',auth, async(req,res) => {
    const id = req.params.id
    console.log(id);
    
    try {
        const articles = await Articles.findById(id)
        if (!articles) {
            res.status(404).send('File not found')
        }
        await articles.remove()
        res.status(200).send(articles)
    } catch (error) {
        res.status(400).send()
    }
    })
router.patch('/update/:id/:email',auth,async(req,res) => {
         const _id = req.params.id
         try {
            const articles = await Articles.findByIdAndUpdate(_id,{$set:req.body})
            if (!articles) {
                res.status(404).send()
            }
            res.status(200).send(articles)
         } catch (error) {
             res.status(400).send()
         }
         
})
 module.exports = router