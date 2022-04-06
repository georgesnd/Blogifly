const nodeMailer=require('nodemailer');

exports.sendMail=(req,res)=>{ 
    console.log('req body',req.body);
    let userMail=req.body.userEmail; 
    let userMessage=req.body.message;

    let transporter=nodeMailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASSWORD
        }
    }) 
    var message = {
        from:process.env.EMAIL,
        to:process.env.EMAIL, 
        subject:"Message title",
        text:`You receive an email from:${userMail}, 
        message:${userMessage}`, 
      
    };
    transporter.sendMail(message,(err,info) =>{
        if(err){
            console.log("error in sending email", err)
            return res.status(400).json({
                message:`error in sending email ${err}`
            })
        }else {
            console.log("successfully send the email", info)
            return res.json({
                message:info
            })
        }
    })
} 