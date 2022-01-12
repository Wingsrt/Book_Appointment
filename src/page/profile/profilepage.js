import React  from 'react'
import { useState } from 'react'

import { useEffect, } from 'react'

import {useHistory} from 'react-router-dom'

  
import './profilepage.css'
function Profilepage() {

  


  const axios = require('axios');

  const red=useHistory()

const [datta,setdata]=useState([])
const [boap,setboap]=useState([])

const [st,setst]=useState(false)


console.log(boap.length)

    useEffect(() => {
      const a=JSON.parse(localStorage.getItem("Token"))
        fetch(`https://myapidoc.herokuapp.com/userdata/${a}`)
        .then(response => response.json())
        .then(data => setdata(data) ); 



        fetch(`https://myapidoc.herokuapp.com/try`)
        .then(response => response.json())
        .then(da => {
             
           // console.log(data)

            setboap(da)
            
        });
       
    }, [st])


    function handel(el){
      console.log(el)

      axios.post(process.env.React_App_URL_API+"/cancel", {  
      
       forenic:el.username_id,
       dd:el.doctor_id,
       slott:el.doctor_slotb

     

  })

      st==false?setst(true):setst(false)

     
    }


    return (
        <div className='probox'>
           <div>{datta.map(function(el){

               return(
               <div className='inbox' >
               <img className='imgu' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3GPI5929Cmg2WNKAXDcdtqXb6qhTZSRC42g&usqp=CAU'/>
               <h3 className='usernn'>Name:-{el.name}</h3>
               <h4 style={{color:"white"}}>Mobile:-{el.mobile}</h4>
               <h4 style={{color:"white"}}>City:-{el.city}</h4>
               <div style={{display:"flex"}} >
                   <label style={{color:"white"}}>Password</label>
               <input className='passedit' readOnly={true} placeholder={el.password} />
                     
                     </div> 
               </div>    
              
                )
           })}</div>
           <div className='wowg' style={{overflow:"scroll"}}><img className='imm' style={{width:"300px",height:"400px",visibility:boap.length>0?"hidden":"visible",position:"absolute"}} src='https://cdn.dribbble.com/users/1252202/screenshots/6271180/loading_02.gif'/>
           {
             boap.map(function(el){

                return (
                    <div className='apbox'>
                      <h4 style={{marginLeft:"50px"}}>Dr{" "+el.doctor_name}</h4>
                      <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                      <h5>{el.doctor_slotb}</h5>
                      <button onClick={()=>handel(el)} style={{height:"20px",marginLeft:"20px"}}>Cancel</button>
                      </div>
                      

                    </div>
                )
             })

           }
           </div>
           
            
        </div>
    )
}

export default Profilepage
