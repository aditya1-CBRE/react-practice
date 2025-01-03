import React,{Component} from 'react';

class Message extends Component{
    constructor(){
        super()
        this.state = {
            message: 'Welcome Message'
        }
    }
    changeMessage(){
        this.setState({
            message: 'Luffy will become pirate king'
        })
    }

    render(){
        return(
            <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=> this.changeMessage()}>Click Here</button>
            </div>
        );
    }
}

export default Message;