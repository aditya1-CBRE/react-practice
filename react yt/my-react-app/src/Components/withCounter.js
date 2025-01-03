import React, { useState, useEffect } from "react";

const UpdatedComponent = (OriginalComponent,IncrementNum) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    IncrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + IncrementNum };
      });
    };
    render() {
      return (
        <div>
          <OriginalComponent
            count={this.state.count}
            IncrementCount={this.IncrementCount}
          />
        </div>
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
