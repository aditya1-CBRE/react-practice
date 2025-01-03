import React,{useState,useEffect} from 'react'
import useDocumentTitle from '../useDocumentTitle';

function DocTitleOne() {
    const [count, setCount] = useState(0);
   useDocumentTitle(count)
    const Increment=()=>{
        setCount(count+1)
    }
  return (
    <div>
      <button onClick={Increment}>Count- {count}</button>
    </div>
  )
}

export default DocTitleOne
