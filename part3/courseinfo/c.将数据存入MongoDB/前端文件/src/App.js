import { useState, useEffect } from 'react'
// 效果钩可以让你对函数组件执行副作用。。
// 获取数据、设置订阅、以及手动改变React组件中的DOM都是副作用的例子。
// 因此，当从服务器获取数据时，效果钩子正是正确的工具。
// import axios from 'axios'
import notesService from './services/notes'
import Note from "./components/note"
import Notification from "./components/notify"
import axios from 'axios'

const App = () => {
  const [notes, setNotes] = useState([])

  const [newNote, setNewNote] = useState(
    'a new note...'
  )
  useEffect(() => {
    axios
      .get('http://localhost:3001/api/notes')
      .then(res => {
        setNotes(res.data)
      })
  }, [])

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const addNote = (event) => {
    event.preventDefault()
    // console.log('button clicked', event.target)
    const noteObject = {
      // id: notes.length + 1,
      content: newNote,
      date: new Date().toDateString(),
      important: Math.random() < 0.5
    }

    notesService
    .create(noteObject)
    .then(returnedNote  => {
      console.log(returnedNote )
      setNotes(notes.concat(returnedNote ))  //在React中我们必须永远不要直接改变状态!
      setNewNote('')
    })
  }

  // 过滤重要note
  // 添加一个状态，跟踪哪些笔记应该被显示
  const [showAll, setShowAll] = useState(true)
  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  // 切换重要性
  const toggleImportanceOf = id => {
    // const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important } //对象传播而写法，对象中不需要改变的属性用...代替

    notesService.update(id, changedNote).then(returnedNote  => {
      setNotes(notes.map(note => note.id !== id ? note : returnedNote ))
    }).catch(error => {
      setErrorMessage(
        `笔记 '${note.content}' 已经被移除 ${error}`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      setNotes(notes.filter(n => n.id !== id))
    })
  }

  // 添加一个新的状态，叫做errorMessage。让我们用一些错误信息来初始化它，这样我们就可以立即测试我们的组件。
  const [errorMessage, setErrorMessage] = useState('some error happened...')

  // 内联样式
  const Footer = () => {
    const footerStyle = {
      color: 'green',
      fontStyle: 'italic',
      fontSize: 16
    }
    return (
      <div style={footerStyle}>
        <br />
        <em>Note app, Department of Computer Science, University of Helsinki 2022</em>
      </div>
    )
  }

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? '重要' : '全部' }
        </button>
      </div>
      <ul>
        {notesToShow.map(note => <Note note={note} key={note.id} toggleImportance={()=>toggleImportanceOf(note.id)}></Note>)}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>
      <Footer />
    </div>
  )
}

export default App