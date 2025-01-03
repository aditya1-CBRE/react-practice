import React, { Component } from 'react'

class ClassClick extends Component {
    ClickFun(){
        console.log("Button is Clicked");
        
    }
  render() {
    return (
      <div>
        <button onClick={this.ClickFun}>Click me</button>
      </div>
    )
  }
}

export default ClassClick
