import {useState} from 'react'

const Blog = ({blog}) => {
  const border = {border:'1px solid', marginTop:'10px', padding:'5px'}
  const [showAll, setShowAll] = useState(false)
  const handleShowAll = () => {
    setShowAll(!showAll)
  }
  const btnLabel = showAll ? 'hide' : 'view'
  const isShow = {display: showAll? '' : 'none'}

  const likeBtnClick = () => {
    
  }
  return(
    <div style={border}>
      <button onClick={handleShowAll}>{btnLabel}</button>
      <div>{blog.title} {blog.author}</div> 
      <div style={isShow}>
        {blog.url}
      </div>
      <div style={isShow}>
        like {blog.like} <button onClick={likeBtnClick}>like</button>
      </div>
    </div>  
  )
}

export default Blog