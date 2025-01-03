import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

class HoverCounter extends Component {
    render() {
    const { count,IncrementCount } = this.props;
    return (
      <div>
        <h1 onMouseOver={IncrementCount}>
          Hovered {count} times
        </h1>
      </div>
    );
  }
}

export default UpdatedComponent(HoverCounter,2);
