import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Luffy",
    };
    console.log("this is LifeCycle A using Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("this is LifeCycle A using getDerivedStateFromProps");

    return null;
  }
  componentDidMount(){
    console.log("this is LifeCycle A using componentDidMount");
  }
  shouldComponentUpdate(){
    console.log("this is LifeCycle A using shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("this is LifeCycle A using getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate(){
    console.log("this is LifeCycle A using componentDidUpdate");
  }
  changeState=()=>{
    this.setState({
        name: "Sanji"
    })
  }
  render() {
    console.log("this is LifeCycle A using render");
    return(
        <>
    <div>LifeCycleA</div>
    <button onClick={this.changeState}>Click To change state</button>
    <LifeCycleB />
    </>
  )
}
}

export default LifeCycleA;
