import React from 'react'

const Person = ({person, toggleDelete}) =>{
    return (
      <div>
        <li>{person.name} {person.number}</li>
        <button onClick={toggleDelete}>delete</button>
        <hr />
      </div>
    )
}

export default Person