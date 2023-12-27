import { useState } from 'react'
import Note from "./components/note"

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)

  //获取表单数据
  // 方法一 受控组件
  const [newNote, setNewNote] = useState(
    'a new note...'
  )
  const handleNoteChange = (event) => {
    console.log(111)
    setNewNote(event.target.value)
  }

  const addNote = (event) => {
    event.preventDefault()
    // console.log('button clicked', event.target)
    const noteObject = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toDateString(),
      important: Math.random() < 0.5
    }

    setNotes(notes.concat(noteObject))  //在React中我们必须永远不要直接改变状态!
    setNewNote('')
  }

  // 过滤重要note
  // 添加一个状态，跟踪哪些笔记应该被显示
  const [showAll, setShowAll] = useState(true)
  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? '重要' : '全部' }
        </button>
      </div>
      <ul>
        {notesToShow.map(note => <Note note={note} key={note.id}></Note>)}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App