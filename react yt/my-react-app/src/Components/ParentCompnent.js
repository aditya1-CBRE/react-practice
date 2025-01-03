import React, { Component } from 'react'
import ChildCompnent from './ChildCompnent'

class ParentCompnent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'Parent'
      }
      this.greetParent=this.greetParent.bind(this)
    }
    greetParent(childName){
        alert(`hello ${this.state.parentName} from ${childName}`)
    }
  render() {
    return (
      <div>
        <ChildCompnent greetHandler={this.greetParent} />
      </div>
    )
  }
}

export default ParentCompnent
