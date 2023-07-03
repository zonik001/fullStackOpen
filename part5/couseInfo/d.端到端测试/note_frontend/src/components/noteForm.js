import { useState } from 'react'

const NoteForm = ({ createNote }) => {

    const [newNote, setNewNote] = useState('')
    
    const addNote = (event) => {
        event.preventDefault()
        createNote({
            content: newNote,
            important: Math.random() > 0.5
        })
        setNewNote('')
    }

    return (
        <div>
            <h2>Create a new note</h2>

            <form onSubmit={addNote}>
                <input
                value={newNote}
                // onChange={(target) => {setNewNote(target.value)}}
                // target是解构之后才能得到的值，没解构导致setNewNote的值是undefind 报错
                //  A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. 
                // Decide between using a controlled or uncontrolled input element for the lifetime of the component.
                onChange={({target}) => {setNewNote(target.value)}}
                placeholder='write here note content'
                />
                <button type="submit">save</button>
            </form>
        </div>
    )
}

export default NoteForm

