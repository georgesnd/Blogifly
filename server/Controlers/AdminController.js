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
        
        const adminWithToken = await user.generateToken(); 
        console.log('Admin with Token', adminWithToken);

        user = user.toObject();
        delete user.pass;
        delete user.token; 

        // const token = await user.generateToken('1d'); 
        res.cookie('cookiename', adminWithToken.token).send({success: true, user}) 

        

        // user = user.toObject();
        // delete user.pass;
        // delete user.token;
        // res.cookie('cookiename', token).send({success: true, user})
        // const updatedAdmin= user.toObject()
        // delete updatedAdmin.pass
        // delete updatedAdmin.token
        // res.cookie('cookiename', token).send({success: true, user: {...updatedAdmin}})
        
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


exports.logout = async(req, res) => {

    try {

        res.clearCookie('cookiename').send({success: true})
        console.log('logout: user logged out')
        
    } catch (error) {
        
        console.log('Logout ERROR:', error.message)
        res.send(error.message)
    }
}

exports.Profile =  async (req, res) => {

    try {
        
        console.log('req.body is', req.body)
        console.log('req.file is', req.file)

        const {email, username, _id} = req.body

        if (!(email || username)) return res.send({success: false, errorId: 1})

        // const foundUser = await User.findById({_id})
        // 
        // update users (field1, field2) set field1 = email and field2 = username

        req.body.image = "/uploads/" + req.file.filename

        const user = await Admin.findByIdAndUpdate(_id, req.body, {new: true}).select('-__v -pass')

        console.log('Profile: user is', user)

        if (!user) return res.send({success: false, errorId: 2})

        res.send({success: true, user})
    } catch (error) {
        
        console.log('Register ERROR:', error.message)
        res.send(error.message)
    }
}

