import React from 'react'
import './MyStyle.css'

function Person({person}) {
  
    return (
        <div>
            <h1 className= 'primary'> My Friend {person.name} is staying at {person.address}</h1>
        </div>
    )
}

export default Person
