
import { Button } from '@mui/material';
import React, { useState,useEffect } from 'react'

import './recept.css'

const axios = require('axios');

function Recept() {

const [allbook,setlist]=useState([])


const [filt,setfilt]=useState("")



    useEffect(() => {
         ////myapidoc.herokuapp.com
        fetch(process.env.React_App_URL_API+"/try")
        .then(response => response.json())
        .then(data => {
             
            console.log(data)

            setlist(data)
            
        });
        
     }, [])






    return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"500px"}} >
         
         <table className='tabel'>
  <tr>
    <th>Patient</th>
    <th>Slot</th>
    <th>Doctor</th>
    <th>Mobile</th>
    <th>Cancel</th>
  </tr>
  {allbook.map(function(el){

 
    
    return(<tr className='row'>
    <td>{el.username_pation}</td>
    <td>{el.doctor_slotb}</td>
    <td>{el.doctor_name}</td>
    <td>{el.username_mobile}</td>
    <td><button style={{backgroundColor:"red",border:"2px solid white",color :"white"}} onClick={()=>{  axios.post('https://myapidoc.herokuapp.com/cancel', {  
      
       forenic:el.username_id,
       dd:el.doctor_id,
       slott:el.doctor_slotb

  }).then(resp => {

      console.log(resp)
     // alert("deleted the slot")
     window.location.reload(false);

  }).catch(error => {
  return "error"
  });}}>Cancel</button></td>
  </tr>)
   })
}
</table> 


         </div>
 

    )

}

export default Recept
