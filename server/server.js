const app = require('./app')
const port = process.env.port || 3000
app.get('/',(req,res)=>{
 res.send('welcome')
})
app.listen(port, ()=> {
    console.log('server is connected',port);
    
})
