import React, { useEffect } from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './navibar.css'
import {useSelector, useDispatch} from 'react-redux'
//import { incre,dele } from '';
import {incre,dele} from '../../action/action'


function Navibar() {
const [check,setcheck]=useState(true)
useEffect(() => {
    const a=JSON.parse(localStorage.getItem('Token'))

      if(a==null){

        setcheck(false)
      }
        else{
            setcheck(true)
        }
}, [])
const dispatch = useDispatch()
const mystate= useSelector((s) => s.ch)
 //const a=mystate


const b=useHistory()

function handel(){
  
    if(check==false){
           
        b.push('/loginpage')
    }
    else{

        window.localStorage.removeItem("Token"); 
        setcheck(false)
    }

}

    return (
        <div className='navbar'>
            <button onClick={()=>dispatch(incre())}  className='butmenu'>menu</button>
            <h5 className='hospitalheading'>ALEXIS HOSPITAL</h5>
             <div className='navbut'>
                 <button className='logbut' onClick={handel}>{check==true?"Logout":"Login"}</button>
                 <button onClick={()=>b.push('/profile')}  className='profilebut' style={{"visibility":check==true?"visible":"hidden"}} >PROFILE</button>
             </div>
        </div>
    )
}

export default Navibar
