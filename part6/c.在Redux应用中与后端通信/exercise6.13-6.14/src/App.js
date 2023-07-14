import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import anecdotesService from './service/anecdote'
import { setAnecdote } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    anecdotesService.getAll().then(res => dispatch(setAnecdote(res)))
  },[dispatch])
  return (
    <div>
      <Notification />
      <Filter/>
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <h2>Create </h2>
      <AnecdoteForm />
    </div>
  )
}

export default App