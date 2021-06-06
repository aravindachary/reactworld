import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {
        return this.state.isLoggedIn ? ( <div>Save World</div>) : ( <div>Stop chopping Tree</div>)  
        // if(this.state.isLoggedIn) {
        //     return (
                // <div>
                //     Welcome World
                // </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             Welcome Universe
        //         </div>
        //     )
        // }
        
    }
}

export default UserGreeting

