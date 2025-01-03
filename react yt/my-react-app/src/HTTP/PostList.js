import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         ErrorMsg:''
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            this.setState({posts:response.data})
        })
        .catch(err=>{
            console.log(err)
            this.setState({ErrorMsg:'Error Retriving Data'})
        })
    }
    
  render() {
    const {posts,ErrorMsg}=this.state
    return (
      <div>
        List Of Posts
        {
            posts.length ? 
            posts.map(post => <div key={post.id}>{post.title}</div>
            ):null
        }
        {ErrorMsg?<div>{ErrorMsg}</div>:null}
      </div>
    )
  }
}

export default PostList
