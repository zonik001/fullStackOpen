import {useState} from 'react'

const Blog = ({blog, handleLikes, handleRemove}) => {
  const border = {border:'1px solid', marginTop:'10px', padding:'5px'}
  const [showAll, setShowAll] = useState(false)
  
  const handleShowAll = () => {
    setShowAll(!showAll)
  }
  const btnLabel = showAll ? 'hide' : 'view'
  const isShow = {display: showAll? '' : 'none'}

  return(
    <div style={border} className='blog'>
      <button onClick={handleShowAll}>{btnLabel}</button>
      <div>{blog.title} {blog.author}</div> 
      <div style={isShow} className='url'>
        {blog.url}
      </div>
      <div style={isShow} className='likes'>
        likes {blog.likes} <button onClick={handleLikes}>like</button>
      </div>
      <button style={isShow} onClick={handleRemove}>remove</button>
    </div>  
  )
}

export default Blog