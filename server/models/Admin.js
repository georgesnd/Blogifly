const mongoose = require('mongoose')
const {Schema} = mongoose


const bcrypt = require('bcrypt');
const { Next } = require('react-bootstrap/esm/PageItem');
const saltRounds = 10;


const adminSchema =new Schema ({
    email: {
        type: String, 
        required: true, 
        unique: true
    }, 
    pass: {
        type: String, 
        required: true
    }, 
    username: {
        type: String, 
        required: true, 
        unique: true
    }, 
    age: {
        type: Number
    }, 
    address: {
        type: String
    }, 
    image: {
        type: String
    }
})
// Middleware 'pre'; before save to user collection
adminSchema.pre('save', function(next){
    console.log('PRE here')

    const admin = this;
   
    if(admin.isModified ('pass')) {
        
        bcrypt.genSalt(saltRounds, function(err,salt ) {
    
            if(err) return next(err);

            bcrypt.hash(admin.pass, salt, function(err, hash) {

                if(err) return next(err)
                admin.pass = hash;
                next(); 
            })

        })
    } else {
        next() 
    }
    
})

adminSchema.methods.comparePassword = async (providedPass, dbPass)=> {
  return await  bcrypt.compare( providedPass, dbPass)
}

const Admin= mongoose.model('Admin', adminSchema)
module.exports = Admin