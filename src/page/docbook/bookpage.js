
import { Button } from '@mui/material'
import { slotShouldForwardProp } from '@mui/material/styles/styled'
import React from 'react'
import  { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {incre,dele} from '../../action/action'

import './bookpage.css'
import emailjs from 'emailjs-com'
const axios = require('axios');



function Bookpage() {

    const [details,detailsset]=useState([])
    const [availslots,avslots]=useState([])
    const [check,setcheck]=useState(false)
    const [slot,setslot]=useState()
    const [eff,seteff]=useState(false)

    const login=useHistory()

    const dispatch = useDispatch()
    const mystate= useSelector((s) => s.ch)


   

    
 
     useEffect(() => {
         
        var x = localStorage.getItem("Name");
        x=JSON.parse(x)

         //console.log(x)
  

        fetch(process.env.React_App_URL_API+`/${x}`)
        .then(response => response.json())
        .then(data => {
             
            detailsset(data[0]);
             avslots(data[1])
           //  console.log(data[1])
            
        });
        
     }, [mystate.list])






     function Confirm2(){  
        
        const s= JSON.parse(localStorage.getItem("bookedlot"))
        const u= JSON.parse(localStorage.getItem("Token"))

       /// seteff(10)

       //console.log(details)
       
    //    const w={
    //        name:"shantanu",
    //        slot:slot
    //    }

    //    emailjs.send("service_wo20v6f","template_z7g19iw",w,"user_UXc5FejvF7L4WicinJvK4").then(resp=>{

    //     console.log(resp)
    //   }).catch(error=>console.log(error))
        const user_name= JSON.parse(localStorage.getItem("Token"))
       //  window.location.reload(false);
         
       // eff==false?seteff(true):seteff(false)

       setcheck(false)
       
    axios.post('https://myapidoc.herokuapp.com/confirm', {  
        
      slot:slot,
      doctor_id:s.idoc,
      user_id:user_name,
      patent:u
      


}).then(resp => {

   // eff==false?seteff(true):seteff(false)


   //console.log("hello")
   
  
 
   

   dispatch(dele())

}).catch(error => {

return "error"

});
     }



   //  console.log(eff)

    return (<>
    <div style={{"visibility":check==true?"visible":"hidden","margin-left":check==true?"20%":"0%"}} className='savebox'>

    <div className='cut' onClick={()=>{
        setcheck(false)
        window.localStorage.removeItem("bookedlot");
        dispatch(incre())
    }} >x</div>
    <div className='bv'>
        {
            details.map(function(el){
                return (
                    <div>
                    <img className='di' src={el.img}/>
                    <h5>{el.name}</h5>
                    </div>
                )
            })
        }
    </div>
    {slot}
    <button className='buttn' onClick={Confirm2}>Confirm</button>
    </div>
        <div style={{"filter":check==true?"blur(8px)":"blur(0px)"}} className='boxx'>
            <div className='detailsshow'>
                
                    {details.map(function(el){
                        return(

                            <div className='bookbox'>
                                

                                <img className='proimg' src={el.img}  />
                                <h4>NAME:-{el.name}</h4> 
                                <h4>AGE:-{el.age}</h4> 
                                <h4>DEGREE:-{el.degree}</h4>
                                <h4>FEILD:-{el.feild}</h4>

                                
                            </div>
                        )
                    })

                    }
                
            </div>
            <div className='navboxx'>
               <h4 className='XPL'>BOOK THE AVAILABLE SLOTS</h4>
            <div className='slotbox'>
 
             {
                 availslots.map(function(el){


                    return(
                         <button onClick={()=>{
                               
                            var token = localStorage.getItem("Token");
                            token=JSON.parse(token)

                           if(token==null){
                               login.push('/loginpage') 
                           }else{
                             
                              console.log(el)
                              var x = localStorage.getItem("Name");
                              x=JSON.parse(x)
                      
                              console.log(x)

                              const n={
                                  idoc:x,
                                  slot:el
                              }

                              setslot(el)
                              localStorage.setItem('bookedlot',JSON.stringify(n))
                              setcheck(true)

                           }
                

                         }} className='slotbut'>{el}</button>
                    )
                 })
             }
        


            </div>
            </div>
                    
        </div>
        </>
    )
}

export default Bookpage
