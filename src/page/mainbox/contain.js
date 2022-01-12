
import React, { useEffect, useState } from 'react'

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './contain.css'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
function Contain() {

    const chn=useHistory()

    function handel(el){
                  
        console.log(el)

        var id=el

        localStorage.setItem('Name',JSON.stringify(el));

        
    }

    const [doc,setdoc]=useState([]);

    useEffect(() => {

        fetch(process.env.React_App_URL_API+"/show")
        .then(response => response.json())
        .then(data => setdoc(data));
       
    }, [])

const mystate= useSelector((s) => s.ch)
const a=mystate

console.log(a)

    return (
        <>
        <div className='sidebar' style={{"marginLeft":a.counter==true?"0px":"-400px"}} ></div>
        <button className='reciptbutton' onClick={()=>chn.push('/recipt')} >RECIPTION DASHBOARD</button>
        <div className='box'>
            {doc.map(function(el){
                return (
                    <div className='innerbox'> 
                        <img className='icon' src={el.img} />
                        <div className='box2'>
                        <label className='docname'>{el.name}</label>
                        <label className='docage'>Age:{" "}{el.age}</label>
                        
                        <label>Degrees:{el.degree}</label>
                        <label className='docfeild'>Feild:{el.feild}</label>
                        </div>
                       
                      <Link to='/books'> <Button className='xp' onClick={()=>{handel(el._id)}} variant="contained">BOOK APPOINTMENT</Button></Link> 

                    </div>
                )
            })

            }

          
            
        </div>
           
          </>
    )
}

export default Contain
