import { useState, useEffect, useRef } from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import blogService from './services/blogs'
import loginService from './services/login'
import LoginForm from './components/LoginForm'
import Togglabel from './components/Togglabel'
import BlogForm from './components/BlogForm'


const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    blogService.getAll().then(blogs =>
      {
        const copy = [...blogs]
        setBlogs( copy.sort((a,b) =>  a.likes - b.likes ) )
      }
    )  
    
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.sessionStorage.getItem('loginUser')
    
    if(loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      console.log(user);
      setUser(user)
      blogService.setToken(user.token)
    }
  },[])
  const handleLogout = () => {
    window.sessionStorage.removeItem('loginUser')
    setUser(null)
  }
  const handleLogin = async (userObj) => {
    try {
      const user = await loginService.login(userObj)
      window.sessionStorage.setItem('loginUser', JSON.stringify(user))
      setUser(user)
      blogService.setToken(user.token)
    } catch (error) {
      setErrorMessage('')
      setTimeout(() => {
        setErrorMessage('')
      }, 5000)
    }
  }
 
  const loginForm = () => (
    <Togglabel showBtnLabel='login'>
      <LoginForm handleSubmit={handleLogin} />
    </Togglabel>
  )
  // 上面等价于?? 调用方式不一样，下面写法直接组件就行，上面则是 loginForm()
  // 这种写法会导致input框不能连续输入，只能用上面的辅助函数写法
  // const loginForm = () => {
  //   return(...)
  // }
  const addBlog = (newObj) => {
    blogService.create(newObj).then(res=> {
      console.log(res);
      blogFormRef.current.toggleVisibility()
      setBlogs(blogs.concat(res))
    })
  }

  const updatedBlog = async (id) => {
     try {
      const blog = blogs.find(item => item.id === id)
      const changedBlog = {...blog, likes: blog.likes+1}
      console.log(changedBlog);
      const returnedBlog = await blogService.update(id, changedBlog)      
      setBlogs(blogs.map(blog => blog.id !== id ? blog : returnedBlog ))
     } catch (error) {
      setErrorMessage(error)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
     }
  }

  const deleteBlog = async id => {
    window.confirm(`请问是否要删除该条博客`)
    await blogService.deleteApi(id)
    setBlogs(blogs.filter(blog => blog.id !== id))
  }

  // A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. 
  // Decide between using a controlled or uncontrolled input element for the lifetime of the component.
  const blogFormRef = useRef()
  const blogform = () => (
    <Togglabel showBtnLabel='create' ref={blogFormRef}>
      <BlogForm handleSubmmit={addBlog} />
    </Togglabel>
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
          {blogform()}
          {blogs.map(blog =>
          <Blog key={blog.id} blog={blog} handleLikes={()=>updatedBlog(blog.id)} handleRemove={() => deleteBlog(blog.id)} />
          )}
        </div>
      }
    </div>
  )
}

export default App