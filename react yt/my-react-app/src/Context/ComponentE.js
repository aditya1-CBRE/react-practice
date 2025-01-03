import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

class ComponentE extends Component {
  render() {
    return (
      <div>
        ComponentE context {this.context}
        <ComponentF />
      </div>
    )
  }
}
ComponentE.contextType=UserContext

export default ComponentE
