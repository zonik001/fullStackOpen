import { useState } from 'react'

const BlogForm = ({handleSubmmit}) => {
    const [newObj, setNewObj] = useState({
        title: '',
        author: '',
        url:''
    })
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

    const create = (event) => {
        event.preventDefault()
        handleSubmmit(newObj)
        setNewObj({
            title: '',
            author: '',
            url: ''
        })
    }

    return(
        <div>
            <form onSubmit={create}>
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
        </div>
    )
}

export default BlogForm