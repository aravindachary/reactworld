import React, { Component } from 'react'

export class Message extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Component State'
        }
    }
    
    changeMessage() {
        this.setState({
            message: 'thanks for subscribe'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={()=>this.changeMessage() }>Click</button>
            </div>
        )
    }
}

export default Message
