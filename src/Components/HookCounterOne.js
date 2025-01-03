import React,{useState,useEffect} from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    useEffect(()=>{
        console.log(`useEffect-Updating Document Title`)
        document.title=`Clicked ${count} times`
    },[count])
    const Increment=()=>{
        setCount(count+1)
    }
  return (
    <div>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
      <button onClick={Increment}>Clicked {count}times</button>
    </div>
  )
}

export default HookCounterOne
