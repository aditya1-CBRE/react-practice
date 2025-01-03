import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      Count: 0,
    };
  }
  increseCount() {
    // this.setState(
    //   {
    //     Count: this.state.Count + 1,
    //   },
    //   () => {
    //     console.log("Callback value", this.state.Count);
    //   }
    // );
    this.setState(prevState=>({
        Count: prevState.Count+1
    }))
    console.log(this.state.Count);
  }
  increseCountFive(){
    this.increseCount();
    this.increseCount();
    this.increseCount();
    this.increseCount();
    this.increseCount();
  }

  render() {
    return (
      <div>
        <div>Count-{this.state.Count}</div>
        <button onClick={() => this.increseCountFive()}>Click To Increse</button>
      </div>
    );
  }
}

export default Counter;
