export const sendMail=data=>{
    console.log(data); 
    console.log(JSON.stringify(data)); 
    return fetch('/mail/sendmail',{
        method:"POST",
        headers:{
            "content-type":"application/json" 
        }, 
        body:JSON.stringify(data)
    }).then(response=>{
        console.log("response", response);
        return response.json();
    }).catch(err=>console.log(err))
}