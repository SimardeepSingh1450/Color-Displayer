import React, { useState } from 'react'
import './App.css'
function ColorDisplay() {
    const [color,setColor]=useState("Empty Value")

    const newColor=(e)=>{
        if(e.target.value.length>1){
            setColor(e.target.value)
        }
        else{
            setColor("Enter New Value")
        }
    }
  return (
    <>
    <h1 style={{color:`${color}`}}>Color Displayer</h1>
    <div style={{backgroundColor:`${color}`}} className='yun'>
        <h1>{color}</h1>
    </div>
    
        <input className='lu' onChange={(e)=>newColor(e)} style={{width:210}} type="text" placeholder='Enter the name of the Color...'/>
       
    
    </>
  )
}

export default ColorDisplay