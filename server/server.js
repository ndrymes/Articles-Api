const app = require('./app')
app.get('/',(req,res)=>{
 res.send('welcome')
})
app.listen(3000, ()=> {
    console.log('server is connected');
    
})
