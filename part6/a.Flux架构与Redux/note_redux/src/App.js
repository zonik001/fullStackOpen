// import { useState, useEffect, useRef } from 'react'
// // 效果钩可以让你对函数组件执行副作用。。
// // 获取数据、设置订阅、以及手动改变React组件中的DOM都是副作用的例子。
// // 因此，当从服务器获取数据时，效果钩子正是正确的工具。
// // import axios from 'axios'
// import notesService from './services/notes'
// import loginService from './services/login'
// import Note from "./components/note"
// import Notification from "./components/notify"
// import LoginForm from "./components/loginForm"
// import Togglable from './components/togglable'
// import NoteForm from './components/noteForm'

// // 内联样式
// const Footer = () => {
//   const footerStyle = {
//     color: 'green',
//     fontStyle: 'italic',
//     fontSize: 16
//   }
//   return (
//     <div style={footerStyle}>
//       <br />
//       <em>Note app, Department of Computer Science, University of Helsinki 2023</em>
//     </div>
//   )
// }
// const App = () => {
//   const [notes, setNotes] = useState([])
//   // 添加一个新的状态，叫做errorMessage。让我们用一些错误信息来初始化它，这样我们就可以立即测试我们的组件。
//   const [errorMessage, setErrorMessage] = useState('no error')
//   const [user, setUser] = useState(null)

//   useEffect(() => {
//     notesService
//       .getAll()
//       .then(initialNotes  => {
//         console.log('promise fulfilled')
//         setNotes(initialNotes)
//       })
//   }, [])

//   useEffect(() => {
//     const loggedUserJSON = window.sessionStorage.getItem('loggedNoteappUser')
//     if (loggedUserJSON) {
//       const user = JSON.parse(loggedUserJSON)
//       setUser(user)
//       notesService.setToken(user.token)
//     }
//   }, [])

//   // 添加笔记
//   const addNote = (noteObject) => {
//     noteFormRef.current.toggleVisibility()
//     notesService
//     .create(noteObject)
//     .then(returnedNote  => {
//       setNotes(notes.concat(returnedNote ))  //在React中我们必须永远不要直接改变状态!
//     })
//   }

//   // 过滤重要note
//   // 添加一个状态，跟踪哪些笔记应该被显示
//   const [showAll, setShowAll] = useState(true)
//   const notesToShow = showAll ? notes : notes.filter(note => note.important)

//   // 切换重要性
//   const toggleImportanceOf = id => {
//     // const url = `http://localhost:3001/notes/${id}`
//     const note = notes.find(n => n.id === id)
//     const changedNote = { ...note, important: !note.important } //对象传播而写法，对象中不需要改变的属性用...代替

//     notesService.update(id, changedNote).then(returnedNote  => {
//       setNotes(notes.map(note => note.id !== id ? note : returnedNote ))
//     }).catch(error => {
//       setErrorMessage(
//         `笔记 '${note.content}' 已经被移除 ${error}`
//       )
//       setTimeout(() => {
//         setErrorMessage(null)
//       }, 5000)
//       setNotes(notes.filter(n => n.id !== id))
//     })
//   }

//   // 登录
//   const handleLogin = async (userObj) => {
//     try {
//       const user = await loginService.login(userObj)
      
//       window.sessionStorage.setItem(
//         'loggedNoteappUser', JSON.stringify(user)
//       )
//       setUser(user)
//       notesService.setToken(user.token)
      
//     } catch (exception) {
//       setErrorMessage('Wrong credentials')
//       setTimeout(() => {
//         setErrorMessage(null)
//       }, 5000)
//     }
//   }

//   // 退出登录
//   const handleLogout = () => {
//     setUser(null)
//     window.sessionStorage.removeItem('loggedNoteappUser')
//   }

//   // 登录表单辅助函数
//   const loginForm = () => {

//     return (
//       <Togglable buttonLabel='login'>
//         <LoginForm handleSubmit={handleLogin}/>
//       </Togglable>
//     )
//   }

//   const noteFormRef = useRef()
//   // 笔记新增表单辅助函数
//   const noteForm = () => (
//     <Togglable buttonLabel="new note" ref={noteFormRef}>
//       <NoteForm createNote={addNote}/>
//     </Togglable>
//   )

//   return (
//     <div>
//       <h1>Notes</h1>
      
//       <Notification message={errorMessage} />

//       {user === null ?
//         loginForm() :
//         <div>
//           <span>{user.name} logged-in</span>
//           <button onClick={handleLogout}>logout</button>
//           {noteForm()}
//           <div>
//           <button onClick={() => setShowAll(!showAll)}>
//             show {showAll ? '重要' : '全部' }
//           </button>
//           </div>
//           <ul>
//             {notesToShow.map(note => <Note note={note} key={note.id} toggleImportance={()=>toggleImportanceOf(note.id)}></Note>)}
//           </ul>
//         </div>
//       }
//       <Footer />
      
//     </div>
//   )
// }

// export default App
import store from "./reducers/noteReducer"

store.dispatch({
  type: 'NEW_NOTE',
  data: {
    content: 'the app state is in redux store',
    important: true,
    id: 1
  }
})

store.dispatch({
  type: 'NEW_NOTE',
  data: {
    content: 'state changes are made with actions',
    important: false,
    id: 2
  }
})

const App = () => {
  return(
    <div>
      <ul>
        {store.getState().map(note=>
          <li key={note.id}>
            {note.content} <strong>{note.important ? 'important' : ''}</strong>
          </li>
        )}
        </ul>
    </div>
  )
}

export default App