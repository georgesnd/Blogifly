import React, {useState} from 'react';
import { sendMail } from './Email';
const Mail=()=> {
    const [values,setValues]=useState({
        userEmail:'',
        message:'',
        status:false
    })
    const {userEmail, message, status}=values;
    const handleChange=name=>event=>{
        setValues({...values,[name]:event.target.value})
    }

    const handleSubmit=event=>{
        event.preventDefault();
        console.log('values email', userEmail);
        console.log('values message', message);
        sendMail({userEmail,message}).then(data=>{
            if(data.err){
                console.log("err",data.err);
            }else{
                console.log("Success",data);
                setValues({...values, status:true})
            }
        }).catch(console.log("Error in send mail"))
    }
    return(
        <>
        <h1>Send your message to us</h1>
        <form onSubmit={handleSubmit}>
           <label>
               Your Email:
               <input type='text' placeholder='enter your email' value={userEmail}
               onChange={handleChange("userEmail")} />
               </label> <br/><br/>
               <label>
                Your message:
               <input type='text' placeholder='enter your message' value={message}
               onChange={handleChange("message")} />
               </label><br/><br/>
            <button type='Submit'> Send your message</button>
        </form>
        {
            status ?<div> <h1>Message sent successfully</h1></div> : <div></div>
        }
        </>
    )
}

export default Mail 