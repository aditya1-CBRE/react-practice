import React,{useState,useEffect} from 'react'
import axios from 'axios';

function DataFetchingOne() {
    const [posts, setPosts] = useState({});
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState('')

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>{
            setLoading(false);
            setPosts(res.data);
            setError('')
        })
        .catch(error=>{
            setLoading(false);
            setPosts({})
            setError('Error fetching data')
            
        })
    },[])
  return (
    <div>
      {loading ? 'Loading....':posts.title}
      {error ? error : null}
    </div>
  )
}

export default DataFetchingOne
