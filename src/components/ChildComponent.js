import React, { Component } from 'react'

export class ChildComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <button onClick={()=>this.props.greetHandler('Aravind')}>Greet Parent</button>
            </div>
        )
    }
}

export default ChildComponent
