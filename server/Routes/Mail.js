const express=require('express');
const router=express.Router();

const mailControllers= require('../Controlers/MailControllers')
router.post('/sendmail',mailControllers.sendMail);


module.exports = router 