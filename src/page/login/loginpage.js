
import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './loginpage.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
const axios = require('axios');


function Loginpage() {

 const [user,setuser]=useState({
     mobile:'',
     password:''
 })

    const change=useHistory()

function signuphandel(){

    change.push('/signup')
}


function handel(e){

    const {name,value}=e.target

    setuser({

        ...user,
        [name]:value
    })


}

function submit(e){

    e.preventDefault()

    axios.post(process.env.React_App_URL_API+"/login", {
   
        mobile: user.mobile,
        password:user.password,
      
        
        

}).then(resp => {

    // const tok="12swftgey6464555fger"

 ////   console.log("respons"+resp.data.respons)

   

   const tok=resp.data.idname

   if(tok!=undefined){
 

     resp.data.respons=="Valid"?localStorage.setItem('Token',JSON.stringify(tok)):console.log("nonvalid")


     const tokensee=JSON.parse(localStorage.getItem('Token'))

     console.log("tookens"+tokensee)

       if(tokensee==tok){
         change.push('/')
       }

    }else{
        alert("ples give correct info")
    }

   

}).catch(error => {

return "error"


});


}

    return (
        <div className='loginbox'>
            <label className='loginhead'>LOGIN</label>
            <div className='innerdiv'>
                <h5 className='logla'>MOBILE</h5>
            <input className='i' onChange={handel} name='mobile'/>
            </div>
            <div className='innerdiv'>
                <h5 className='logla'>PASSWORD</h5>
            <input className='i' onChange={handel} name='password'/>
            </div>

            <div className='butdiv'>
            <Button className='logbutton' onClick={submit}  variant="contained">Log In</Button>
            </div>
            {/* <button onClick={()=>window.location.reload(false)}>relode</button> */}
            <h5 style={{marginLeft:"50px"}}>dont have account?<span style={{color:"rgb(255, 217, 0)",textDecoration: "underline",fontSize:"15px"}} onClick={signuphandel} >Sign up</span></h5>
        </div>
    )
}

export default Loginpage
