import React, { useState,useEffect } from 'react'

function IntervelHookCounter() {
    const [count,setCount]=useState(0);
    const tick=()=>{
        setCount((prevCount)=>prevCount+1)
    }
    useEffect(()=>{
        const intervel=setInterval(tick,1000)
        return()=>{
            clearInterval(intervel)
        }
    },[count])
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default IntervelHookCounter
