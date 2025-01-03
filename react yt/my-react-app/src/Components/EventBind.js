import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"hello"
      }
    //   this.eventHandler=this.eventHandler.bind(this)
    }
    // eventHandler(){
    //     this.setState({
    //         message:"Bye"
    //     })
    //     console.log(this);
    // }
    
    eventHandler=()=>{
        this.setState({
            message:"Button is clicked you can leave"
        })
    }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.eventHandler.bind(this)}>Click Here</button>  */} 
        <button onClick={this.eventHandler}>Click Here</button>  
        {/* <button onClick={()=>this.eventHandler()}>Click Me</button> this is arrow method */}
      </div>
    )
  }
}

export default EventBind
