import React, { Component } from 'react'
import FRInput from './FRInput'
import Input from './Input'

export class FocusInput extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.componentRef = React.createRef()
    }

    clickHandler=()=>{
        this.componentRef.current.focus();
    }
    
    render() {
        return (
            <div>
                {/* <Input ref={this.componentRef}/> */}
                <FRInput  ref={this.componentRef}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default FocusInput
