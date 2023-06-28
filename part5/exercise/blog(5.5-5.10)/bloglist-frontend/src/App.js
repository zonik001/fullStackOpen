import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import blogService from './services/blogs'
import loginService from './services/login'


const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [newObj, setNewObj] = useState({
    title: '',
    author: '',
    url:''
  }) 

  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.sessionStorage.getItem('loginUser')
    if(loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  },[])
  const handleLogout = () => {
    window.sessionStorage.removeItem('loginUser')
    setUser(null)
  }
  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password
      })
      window.sessionStorage.setItem('loginUser', JSON.stringify(user))
      console.log(user);
      setUser(user)
      blogService.setToken(user.token)
      setUsername('')
      setPassword('')
    } catch (error) {
      setErrorMessage('')
      setTimeout(() => {
        setErrorMessage('')
      }, 5000)
    }
  }
  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div>
        username
          <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
          <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>
  )
  // 上面等价于?? 调用方式不一样，下面写法直接组件就行，上面则是 loginForm()
  // 这种写法会导致input框不能连续输入，只能用上面的辅助函数写法
  // const loginForm = () => {
  //   return(...)
  // }
  const addBlog = (event) => {
    event.preventDefault()
    blogService.create(newObj).then(res=> {
      console.log(res);
      setBlogs(blogs.concat(res))
      setNewObj({
        title: '',
        author: '',
        url:''
      })
    })
  }

  // A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. 
  // Decide between using a controlled or uncontrolled input element for the lifetime of the component.
  const handleTitle = (event) => {
    let obj = {
      ...newObj,
      title: event.target.value
    }
    setNewObj(obj)
  }
  const handleAuthor = (event) => {
    let obj = {
      ...newObj,
      author: event.target.value
    }
    setNewObj(obj)
  }
  const handleUrl = (event) => {
    let obj = {
      ...newObj,
      url: event.target.value
    }
    setNewObj(obj)
  }
  const blogform = () => (
    <form onSubmit={addBlog}>
      <ul>
        <li>
          <span>title</span>
          <input
            value={newObj.title}
            onChange={handleTitle}
          />
        </li>
        <li>
          <span>author</span>
          <input
            value={newObj.author}
            onChange={handleAuthor}
          />
        </li>
        <li>
          <span>url</span>
          <input
            value={newObj.url}
            onChange={handleUrl}
          />
        </li>
      </ul>
      <button type="submit">save</button>
    </form>
  )
  return (
    <div>
      <Notification message={errorMessage}/>
      <h2>blogs</h2>
      {
        user === null ?
        loginForm() :
        <div>
          <span>{user.name}已登录</span>
          <button onClick={handleLogout}>logout</button>
          <h2>Create New</h2>
          {blogform()}
          {blogs.map(blog =>
          <Blog key={blog.id} blog={blog} />
          )}
        </div>
      }
    </div>
  )
}

export default App