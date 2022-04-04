const jwt = require('jsonwebtoken')
const Admin = require('../models/Admin')

module.exports = async(req, res) =>{
    try {
     
        const token = req.cookies.recapcookie
        console.log('auth here, token is', token);
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log('auth : decoded is', decoded);

        const admin = await Admin.findById(decoded.id)
        if(!admin) return res.send({success:false})

        next()

    } catch (error) {
        res.send(error.message)
    }
}