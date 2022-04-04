const Admin = require('../models/Admin')

exports.Login = async (req, res) => {

    try {
        const {email, pass} = req.body
       
        if (!(email) || !pass) return res.send({success: false, errorId: 1})

        // if (!email && !username) //send success false
        // if (!pass) send success false
        // const user = User.findOne({email: email, pass: pass})
        let user = await Admin.findOne({email}).select('-__v')
        
        console.log('Login: admin is', user)
        if (!user) return res.send({success: false, errorId: 2})

        const passMatch = await user.comparePassword(pass, user.pass)
        
        if (!passMatch) return res.send({success: false, errorId: 3}) // passwords don't match
        const adminWithToken = user.generateToken(); 
        console.log('Admin with Token', adminWithToken);

        const token = await user.generateToken('1d');

        // user = user.toObject();
        // delete user.pass;
        // delete user.token;
        // res.cookie('cookiename', token).send({success: true, user})
        const updatedAdmin= user.toObject()
        delete updatedAdmin.pass
        delete updatedAdmin.token
        res.cookie('cookiename', token).send({success: true, user: {...updatedAdmin}})
        
    } catch (error) {
        
        console.log('Login ERROR:', error.message)
        res.send(error.message)
    }
} 

exports.Register = async (req, res) => {

    try {
        console.log('req.body is', req.body)
        const user = new Admin(req.body)

        await user.save()  

        res.send({success: true})
    } catch (error) {
        console.log('Register Error: ', error.message)
    }
} 


