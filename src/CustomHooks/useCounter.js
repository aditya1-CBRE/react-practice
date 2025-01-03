import {useState} from 'react'

function useCounter(initailCount=0,value) {
  
      const [count, setCount] = useState(initailCount);
      const increment=()=>{
          setCount(count+value);
      }
      const decrement=()=>{
          setCount(count-value);
      }
      const reset=()=>{
          setCount(initailCount);
      }

      return [count,increment,decrement,reset]
}

export default useCounter
