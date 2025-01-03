import React, { Component } from 'react'
import RegulrCompo from './RegulrCompo'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Luffy'
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Luffy'
            })
        },2000)
    }
  render() {
    console.log("Parent Component rendered")
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name} />
        {/* <RegulrCompo name={this.state.name} />
        <PureComp name={this.state.name} /> */}
      </div>

    )
  }
}

export default ParentComp
