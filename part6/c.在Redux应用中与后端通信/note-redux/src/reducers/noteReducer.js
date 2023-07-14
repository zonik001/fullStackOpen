import { createSlice } from '@reduxjs/toolkit'
import noteService from '../services/notes'

const initialState = []

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    toggleImportanceOf(state, action) {
      const id = action.payload
      const noteToChange = state.find(n => n.id === id)
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important
      }
      return state.map(note =>
        note.id !== id ? note : changedNote
      )
    },
    // 后台数据插入（每一条笔记插入一次）
    appendNote(state, action) {
      state.push(action.payload)
    },
    // 添加一个动作创建器setNotes，可以用来直接替换笔记数组。（无需一条一条）
    setNotes(state, action) {
      return action.payload
    }
  },
})

export const { toggleImportanceOf, appendNote, setNotes } = noteSlice.actions

export const initializeNotes  = () =>{
  return async dispatch => {
    const notes = await noteService.getAll()
    // 导出来了才能用 setNotes
    dispatch(setNotes(notes))
  }
}

export const createNote = (content) => {
  return async dispatch => {
    const newNote = await noteService.createNew(content)
    // 导出来了才能用 appendNote
    dispatch(appendNote(newNote))
  }
}
export default noteSlice.reducer