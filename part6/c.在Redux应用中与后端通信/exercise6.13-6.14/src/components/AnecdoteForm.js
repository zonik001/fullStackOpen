import { createAecdote } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
import { changeNotify } from '../reducers/notification'
import anecdotesService from '../service/anecdote'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const create = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        anecdotesService.createNew(content).then(res => {
            dispatch(createAecdote(res))
        })
        // 等同于 dispatch({ type: 'notes/createNote', payload: 'Redux Toolkit is awesome!' })

        dispatch(changeNotify('create sucsess'))
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