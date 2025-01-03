import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return(
        this.state.isLoggedIn && <div>Welcome Luffy</div>
    )

    // return this.state.isLoggedIn ? (
    //   <div>Welcome Luffy</div>
    // ) : (
    //   <div>Welcome Zoro</div>
    // );

    // let msg;
    // if(this.state.isLoggedIn){
    //     msg = <div>Hello Luffy</div>;
    // }else{
    //     msg = <div>Hello Zoro</div>;
    // }
    // return <div>{msg}</div>
    // if (this.state.isLoggedIn) {
    //   return <div>Hello Luffy</div>;
    // } else {
    //   return <div>Hello Zoro</div>;
    // }
    // return (
    //   <>
    //     <div>Hello Luffy</div>
    //     <div>Hello Zoro</div>
    //   </>
    // );
  }
}

export default UserGreeting;
