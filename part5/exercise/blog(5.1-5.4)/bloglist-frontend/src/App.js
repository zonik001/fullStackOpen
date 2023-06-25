import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'


const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [newObj, setNewObj] = useState({
    blog: '',
    author: '',
    url:''
  })

  const [errorMessage, setErrorMessage] = useState('some error happened...')

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.sessionStorage.getItem('loginUser')
    if(user) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
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
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (error) {
      setErrorMessage(error)
      setTimeout(() => {
        setErrorMessage(null)
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
  const addBlog = () => {

  }
  const handleNewObj = (event) => {
    let copy = newObj
    // setNewObj({...copy,event.target.value})
  }
  const blogform = () => (
    <form onSubmit={addBlog}>
      <ul>
        <li>
          <span>title</span>
          <input
            value={newObj.blog}
            onChange={handleNewObj}
          />
        </li>
        <li>
          <span>author</span>
          <input
            value={newObj.author}
            onChange={handleNewObj}
          />
        </li>
        <li>
          <span>url</span>
          <input
            value={newObj.url}
            onChange={handleNewObj}
          />
        </li>
      </ul>
      <button type="submit">save</button>
    </form>
  )
  return (
    <div>
      <h2>blogs</h2>
      {
        user === null ?
        loginForm() :
        <div>
          <span>{user.name}已登录</span>
          <button onClick={handleLogout}>logout</button>
         { blogs.map(blog =>
          <Blog key={blog.id} blog={blog} />
          )}
        </div>
      }
    </div>
  )
}

export default App