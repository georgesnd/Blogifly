const mongoose = require('mongoose')
const {Schema} = mongoose

const AdminVerificationSchema = new Schema ({
    adminId: {
        type: String
    }, 
    uniqueString: {
        type: String
    }, 
    createdAt: {
        type: Date
    }, 
    expiresAt: {
        type: Date
    }
}); 

const AdminVerification = mongoose.model('AdminVerification', AdminVerificationSchema)
module.exports = AdminVerification; 