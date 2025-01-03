import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

class ClickCounter extends Component {
  render() {
    const { count,IncrementCount } = this.props;
        return (
      <div>
        <button onClick={IncrementCount}>
           Clicked {count} times
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter,5);
