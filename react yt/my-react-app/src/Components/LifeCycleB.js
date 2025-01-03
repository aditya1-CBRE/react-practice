import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Luffy",
    };
    console.log("this is LifeCycle B using Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("this is LifeCycle B using getDerivedStateFromProps");

    return null;
  }
  componentDidMount(){
    console.log("this is LifeCycle B using componentDidMount");
  }
  shouldComponentUpdate(){
    console.log("this is LifeCycle B using shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("this is LifeCycle B using getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate(){
    console.log("this is LifeCycle B using componentDidUpdate");
  }

  render() {
    console.log("this is LifeCycle B using render");
    return <div>LifeCycleB</div>;
  }
}

export default LifeCycleB;
