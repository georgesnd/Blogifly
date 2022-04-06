const express = require('express')
const router = express.Router()
const adminController = require('../Controlers/AdminController')

router.post('/login', adminController.Login)
router.post('/register', adminController.Register)


module.exports = router 