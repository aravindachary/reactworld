import React, { Component } from 'react'

export class Ref extends Component {
    constructor(props) {
        super(props)
        this.state = {    
        }
        this.inputRef = React.createRef()
        this.cbRef = null;
        this.setCbRef = (element) =>{
            this.cbRef = element
        }

    }
    componentDidMount(){
        // this.inputRef.current.focus()
          if(this.cbRef){
              this.cbRef.focus()
          }  
    }
    
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}/>
                <input type='text' ref={this.setCbRef}/>
            </div>
        )
    }
}

export default Ref
