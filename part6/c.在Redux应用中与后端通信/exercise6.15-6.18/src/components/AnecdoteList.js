import { useSelector, useDispatch } from 'react-redux'
import { updataAecdote } from '../reducers/anecdoteReducer'
// import { changeNotify, deleteNotify } from '../reducers/notification'
import { setNotification } from '../reducers/notification'

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
        dispatch(updataAecdote(id))
        // 等同于dispatch({ type: 'notes/createNote', payload: 'Redux Toolkit is awesome!' })
        const notify = anecdotes.find(anecdote => anecdote.id === id).content
        // dispatch(changeNotify(notify))
        // setTimeout(() => {
        //     dispatch(deleteNotify())
        // },5000)
        setNotification(notify,5)
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