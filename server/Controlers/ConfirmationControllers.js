const nodemailer = require('nodemailer') ;

require('dotenv').config();

const nodemailer = require ('nodemailer');
const {v4: uuidv4} = require('uuid');
const bcrypt = require('bcrypt');

let transporter =nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: process.env.AUTH_EMAIL, 
        pass: process.env.AUTH_PASS
    }
})

transporter.verify((error, success)=>{
    if(error){
        console.log(error);
    } else{
        console.log("Ready for messages");
        console.log(success);
    }
}) 

exports.sendConfirmationEmail = function({toAdmin, hash}){
    return new Promise((res,rej) =>{
        const transporter =nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:process.env.GOOGLE_USER,
                pass:process.env.GOOGLE_PASSWORD
            }
        })
        const message={
            from: process.env.GOOGLE_USER,
            // to: toAdmin.email,
            to: process.env.GOOGLE_USER,
            subject:'Activate your Blogifly account',
            html:`
            <h3> Hello ${toAdmin.username} </h3>
            <p>Thank you for registering as an Admin in Blogifly.
            Just one more step...
            <p>To activate your account please follow this link: 
            <a target="_" href="${process.env.DOMAIN}/../api/activate/${hash}">${process.env.DOMAIN}/activate </a></p>
            <p>Cheers</p>
            <p>Your Blogifly Team</p>
            </p>
            `
        }

        transporter.sendMail(message, function(err, info){
            if(err){
                rej(err)
            }else{
                res(info)
            }
        })
    })
} 

