const User = require('../models/user')
const auth = async(req,res,next) => {
    const email = req.params.email
    const tokens = process.env.ACCESS_KEY
    console.log(tokens);
    
    if ( req.headers.code!= tokens ){
        throw new Error()
    }
    try {
        const user = await User.findOne({
            tokens,
            email
        })
        console.log(user);
        
        if (user.priviledge!='admin') {
            throw new Error()
        }
        req.user =user
        next()
        
    } catch (error) {
        res.status(400).send({
            Error:'Not an admin'
        })
    }
    
}
module.exports = auth