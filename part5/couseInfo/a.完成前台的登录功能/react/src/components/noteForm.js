// import React from "react"
// // import { useState } from 'react'
// // import notesService from './services/notes'

// const noteForm = ({addNote}) => {
//     // const addNote = (event) => {
//     //     event.preventDefault()
//     //     // console.log('button clicked', event.target)
//     //     const noteObject = {
//     //       // id: notes.length + 1,
//     //       content: newNote,
//     //       date: new Date().toDateString(),
//     //       important: Math.random() < 0.5
//     //     }
    
//     //     notesService
//     //     .create(noteObject)
//     //     .then(returnedNote  => {
//     //       console.log(returnedNote )
//     //       setNotes(notes.concat(returnedNote ))  //在React中我们必须永远不要直接改变状态!
//     //       setNewNote('')
//     //     })
//     // }
//     return (
//         <form onSubmit={addNote}>
//             <input
//                 value={newNote}
//                 onChange={handleNoteChange}
//             />
//             <button type="submit">save</button>
//         </form>
//     )
// }
// export default noteForm