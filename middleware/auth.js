const User = require('../models/user')
const auth = async(req,res,next) => {
    const email = req.params.email
    const tokens = process.env.ACCESS_KEY

    console.log(email);
        
    try {
        if ( req.headers.code!= tokens ){
            throw new Error()
        }
        const user = await User.findOne({
            email
        })
        
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