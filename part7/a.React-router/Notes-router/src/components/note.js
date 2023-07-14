import React from 'react'

const Note = ({note,toggleImportance}) =>{
  const label = note.important
  ? '修改为不重要' : '修改为重要'
  return (
    <li className='note'>
      {note.content}
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}

export default Note