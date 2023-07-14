import { useSelector, useDispatch } from 'react-redux'
import { handleVote } from '../reducers/anecdoteReducer'
import { changeNotify, deleteNotify } from '../reducers/notification'

const AnecdoteList = () => {
    const dispatch = useDispatch()

    const anecdotes = useSelector(({filter, anecdote}) => {
        console.log('filter',filter);
        if(filter === '') {
            return anecdote
        }else {
            return anecdote.filter(anecdote => anecdote.content.includes(filter))
        }
    })
    console.log(anecdotes);
    const vote = (id) => {
        dispatch(handleVote(id))
        // 等同于dispatch({ type: 'notes/createNote', payload: 'Redux Toolkit is awesome!' })
        const notify = anecdotes.find(anecdote => anecdote.id === id)
        dispatch(changeNotify(notify.content))
        setTimeout(() => {
            dispatch(deleteNotify())
        },5000)
    }

    return (
        <>
        {anecdotes.map(anecdote =>
            <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
            </div>
        )}
      </>
    )
}

export default AnecdoteList