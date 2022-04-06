const express = require('express')
const Admin = require('../models/Admin')
const router = express.Router()

const multer = require('multer')

// MULTER Local computer simple configuration
const uploadSimple = multer({dest: './server/uploads'})
// console.log('uploadSimple is', uploadSimple)
//******************************* */

// MULTER Local computer advanced configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        
      cb(null, './server/uploads')
    },

    filename: function (req, file, cb) {
      
        console.log('inside storage: FILE is', file)

        let extension = '';

        if (file.mimetype.includes('image')) {
            
            extension = file.mimetype.slice(6)
            
            if (extension === 'jpeg') extension = 'jpg';
    
            const filename = `${req.body._id}-${Date.now()}-${file.originalname}.${extension}`
            console.log('filename is', filename)
            cb(null, filename)

        } else {
            cb('Not an image file')
        }


    },

  })
  
  const uploadAdvanced = multer({ storage: storage })
//*************************************** */  

// MULTER setup for cloudinary
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
 
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

const storageCloudinary = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'e06production',
    format: async (req, file) => {

        let extension = '';

        if (file.mimetype.includes('image')) {
            
            extension = file.mimetype.slice(6)
            
            if (extension === 'jpeg') extension = 'jpg';
        }
        
       return extension

    }, 
    public_id: (req, file) => `${req.body._id}-${Date.now()}-${file.originalname}`,
  },
});
 
const uploadCloudinary = multer({ storage: storageCloudinary });
//*************************************** */  

const sendEmail = require('../utils/mail/mail')
const sendEmailResetPass = require('../utils/mail/mailResetPass')

router.post('/register', async (req, res) => {

    try {
        
        console.log('req.body is', req.body)

        const {email, username, pass} = req.body

        if (!email || !username || !pass) return res.send({success: false, errorId: 1})

        const newAdmin = new Admin(req.body)

        const admin = await newAdmin.save()

        sendEmail()

        console.log('Register: admin created is', admin)

        res.send({success: true})
    } catch (error) {
        
        console.log('Register ERROR:', error.message)
        res.send(error.message)
    }
})

router.post('/login', async (req, res) => {

    try {
        
        console.log('req.body is', req.body)

        const {email, pass, username} = req.body

 
        if (!(email || username) || !pass) return res.send({success: false, errorId: 1})


        // const user = User.findOne({email: email, pass: pass})
        let admin = await Admin.findOne({$or: [{email}, {username}]}).select('-__v')
        
        console.log('Login: user is', user)
        if (!user) return res.send({success: false, errorId: 2})

        const passMatch = await user.comparePassword(pass, user.pass)
        console.log(' passmatch is', passMatch)

        if (!passMatch) return res.send({success: false, errorId: 3}) // passwords don't match

        const userWithToken = await user.generateToken();
        console.log('userwith token is ', userWithToken)

        user = user.toObject();
        delete user.pass;
        delete user.token;

        res.cookie('cookiename', userWithToken.token).send({success: true, user})
        
    } catch (error) {
        
        console.log('Register ERROR:', error.message)
        res.send(error.message)
    }
})

router.get('/logout', async (req, res) => {

    try {

        res.clearCookie('cookiename').send({success: true})
        console.log('logout: user logged out')
        
    } catch (error) {
        
        console.log('Logout ERROR:', error.message)
        res.send(error.message)
    }
})

router.patch('/profile', uploadAdvanced.single('image'), async (req, res) => {

    try {
        
        console.log('req.body is', req.body)
        console.log('req.file is', req.file)

        const {email, username, _id} = req.body

        if (!(email || username)) return res.send({success: false, errorId: 1})

        req.body.image = req.file.filename

        const user = await User.findByIdAndUpdate(_id, req.body, {new: true}).select('-__v -pass')

        console.log('Profile: user is', user)

        if (!user) return res.send({success: false, errorId: 2})

        res.send({success: true, user})
    } catch (error) {
        
        console.log('Register ERROR:', error.message)
        res.send(error.message)
    }
})

router.patch('/profilecloudinary', uploadCloudinary.single('image'), async (req, res) => {

    try {
        
        console.log('req.body CLOUDINARY is', req.body)
        console.log('req.file CLOUDINARY is', req.file)

        const {email, ausername, _id} = req.body

        if (!(email || username)) return res.send({success: false, errorId: 1})

        

        req.body.image = req.file.path

        const user = await User.findByIdAndUpdate(_id, req.body, {new: true}).select('-__v -pass')

        console.log('Profile: user CLOUDINARY is', user)

        if (!user) return res.send({success: false, errorId: 2})

        res.send({success: true, user})
    } catch (error) {
        
        console.log('Register CLOUDINARY ERROR:', error.message)
        res.send(error.message)
    }
})

module.exports = router