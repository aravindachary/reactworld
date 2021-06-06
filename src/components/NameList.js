import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [{
        name : 'Hari',
        address: 'Berhampur',
        age: 28
      },{
        
        name : 'Ram',
        address: 'Aska',
        age: 29
      },{
    
        name : 'Shaym',
        address: 'Gopalpur',
        age: 27
      }
]
const nameList = persons.map((person,index)=> <Person  key={index}  person={person}/> )

    return (
        <div>
            { nameList}
        </div>
    )
}

export default NameList
