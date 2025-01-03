import React from 'react'

function HookCounterTwo() {
    const intialCount=0;
    const [count, setCount] = React.useState(intialCount);
    function Increment() {
        setCount(prevCount=>prevCount+1)
    }
    function decrement(){
        if(count===0){
            alert("Count is zero");
        }
        else
        setCount(prevCount=>prevCount-1)
    }
    function Reset(){
        setCount(intialCount)
    }
    function Increment5(){
        for(let i=1;i<=5;i++){
            setCount(prevCount=>prevCount+1)
        }
    }
  return (
    <div>
        <h3>{count}</h3>
      <button onClick={Increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={Reset}>Reset The Count</button>
      <button onClick={Increment5}>Increment by 5</button>
    </div>
  )
}

export default HookCounterTwo
