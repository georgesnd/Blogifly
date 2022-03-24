const mongoose = require('mongoose') 
module.exports = () => {
    try {
        mongoose.connect(process.env.DB_URI)
        console.log('Connected to DB!')
    } catch (error) {
        console.log('DB Connection Error:', error.message)
        process.exit(1)
    }
} 