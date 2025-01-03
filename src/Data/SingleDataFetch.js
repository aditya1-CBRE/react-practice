import React,{useState,useEffect} from 'react'
import axios from 'axios'

function SingleDataFetch() {
  const [post,setPost]=useState({})
  const [id,setId]=useState(1);
  const [idFromBtnClk,setIdFromBtnClk]=useState(1)
  const fetchData=()=>{
    setIdFromBtnClk(id)
  }
    useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClk}`)
        .then(res=>{
          console.log(res)
          setPost(res.data)
        })
        .catch(e=>{
          console.log(e)
        })
    },[idFromBtnClk])
  
  return (
    <div>
        <input type='text' value={id} onChange={e=>{
            setId(e.target.value)
        }}/>
        <button type='button' onClick={fetchData}>Fetch Post</button>
        <div>{post.title}</div>
    </div>
  )
}

export default SingleDataFetch;
