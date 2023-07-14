import { createAecdote } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'


const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const create = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        dispatch(createAecdote(content))
      }
    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={create}>
                <div>
                    <input name='anecdote'/>
                </div>
                <button type='submit'>create </button>
            </form>
        </div>
    )
}

export default AnecdoteForm