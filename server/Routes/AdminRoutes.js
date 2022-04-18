const express = require('express')
const router = express.Router()
const adminController = require('../Controlers/AdminController')

router.post('/login', adminController.Login)
router.post('/register', adminController.Register)
// router.post('/activate', adminController.Activate) 

router.get('/verification', adminController.Verification)

router.get('/changePassword', adminController.changePassword)

module.exports = router 