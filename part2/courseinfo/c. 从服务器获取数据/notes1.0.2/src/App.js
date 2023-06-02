import { useState, useEffect } from 'react'
// 效果钩可以让你对函数组件执行副作用。。
// 获取数据、设置订阅、以及手动改变React组件中的DOM都是副作用的例子。
// 因此，当从服务器获取数据时，效果钩子正是正确的工具。
import axios from 'axios'
import Note from "./components/note"

const App = () => {
  const [notes, setNotes] = useState([])

  const [newNote, setNewNote] = useState(
    'a new note...'
  )
  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }
  // 默认情况下，useEffect会在每次完成渲染后运行，但你可以选择只在某些值发生变化时启动它。
  // useEffect的第二个参数用于指定效果的运行频率。
  // 如果第二个参数是一个空的数组[]，那么效果就只在组件的第一次渲染时运行。
  useEffect(hook,[])
  console.log('render', notes.length, 'notes')
  const handleNoteChange = (event) => {
    console.log(event.target.value)
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