
import './sign.css'

import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import emailjs from 'emailjs-com'

const axios = require('axios');

function Sign() {

    const [detail,setdetail]=useState({
        name:"",
        mobile:"",
        city:"",
        password:"",
        email:""
    })

    const redi=useHistory()


    const submit=(e)=>{

        e.preventDefault()

       // console.log(detail)
       const w={
        name:detail.name,
        email:detail.email
    }

    emailjs.send("service_wo20v6f","template_z7g19iw",w,"user_UXc5FejvF7L4WicinJvK4").then(resp=>{

     console.log(resp)
   }).catch(error=>console.log(error))

        axios.post(process.env.React_App_URL_API+"/signup", {
   
			name: detail.name,
            password:detail.password,
            city:detail.city,
			mobile: detail.mobile,
            email:detail.email
			
            
    
}).then(resp => {
	return "wow"
   
}).catch(error => {

  return "error"

   
});

 
redi.push('/')

    }




    function handelchange(e){

        const{name,value}=e.target
        
       // console.log(name,value)
       
       setdetail({
           ...detail,
           [name]:value

       })

    }



console.log(detail)
    return (
        <div className='signupbox'>
             <label className='sigp'>SIGN UP</label>
            <input className='signinp' onChange={handelchange} name='name' placeholder='Name' />
            <input className='signinp' onChange={handelchange} name='mobile' placeholder='Number'/>
            <input className='signinp' onChange={handelchange} name='city' placeholder='City'/>
            <input className='signinp' onChange={handelchange} name='email' placeholder='email' />
            <input className='signinp' onChange={handelchange} name='password' placeholder='Password'/>
            <submit  className='buttonss' onClick={submit}>Submit</submit>
            
        </div>
    )
}

export default Sign
