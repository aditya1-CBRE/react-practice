import React, { Component } from "react";

class welcome extends Component {
  render() {
    const {name,aka}=this.props;
    return (
      <h1>
        Hello {this.props.name} aka {this.props.aka}
      </h1>
    );
  }
}
export default welcome;
