import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
import Memo from './Memo'
import PureComp from './PureComp'
import RegComp from './RegComp'

export class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'parent'
        }
    }
    componentDidMount() {
        setInterval(()=>{
            this.setState({
                parentName : 'Aravind'
            })
        },2000)
    }
    render() {
        console.log('this is parent componet')
        return (
            <div>
                   <RegComp name={this.state.parentName}/>
                   <Memo  name={this.state.parentName}/> 
            </div>
        )
    }
}
export default ParentComponent
