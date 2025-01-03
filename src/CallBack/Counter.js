import React,{useState,useMemo} from 'react'

function Counter() {
    const [counter1,setCounter1]=useState(0)
    const [counter2,setCounter2]=useState(0)
    
    const incrementOne=()=>{
        setCounter1(counter1+1)
    }
    const increment2=()=>{
        setCounter2(counter2+1)
    }

    const IsEven=useMemo(()=>{
        let i=0
        while(i<2000000000) i++
        return counter1 % 2 ===0
    },[counter1])

  return (
    <div>
      <div>
        <button onClick={incrementOne}>Count one - {counter1}</button>
        <span>{IsEven ? 'Even' : 'Odd'}</span>
      </div>
      <div>
        <button onClick={increment2}>Count Two - {counter2}</button>
      </div>
    </div>
  )
}

export default Counter
