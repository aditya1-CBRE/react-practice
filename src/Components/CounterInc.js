import React, { Component } from "react";

class CounterInc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }
  componentDidUpdate(prevProps, prevState) {
    
    if(prevState.count !== this.state.count){
      console.log('updating document titles')
      document.title = `Clicked ${this.state.count} times`;
    }
    
  }
  IncreseCount = () => {
    this.setState((prevCount) => {
      return {
        count: prevCount.count + 1,
      };
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <button onClick={this.IncreseCount}>Clicked {count} times</button>
      </div>
    );
  }
}

export default CounterInc;
