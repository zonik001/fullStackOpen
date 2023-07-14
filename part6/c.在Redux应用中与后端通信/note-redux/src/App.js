
import NoteForm from './components/noteForm'
import Notes from './components/notes'
import VisibilityFilter from './components/VisibilityFilter'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import notesService from './services/notes'
import { initializeNotes } from './reducers/noteReducer'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeNotes())
  },[dispatch])
  return (
    <div>
      <NoteForm />
      <VisibilityFilter />
      <Notes />
    </div>
  )
}

export default App