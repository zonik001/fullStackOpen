const noteReducer = (state = [], action) => {
    switch(action.type){
        case 'NEW_NOTE':
            return [...state, action.data]
        case 'TOGGLE_IMPORTANCE': {
            const id = action.data.id
            const noteToChange = state.find(n => n.id === id)
            const changedNote = {
                ...noteToChange,
                important: !noteToChange.important
            }
            return state.map(note =>
                note.id !== id ? note : changedNote
            )
        }
        default:
            return state
   }
}

const generateId = () =>
  Number((Math.random() * 1000000).toFixed(0))

//   一个模块只能有一个默认导出，但有多个 "正常 "导出
// 通常（不是作为默认）导出的函数可以用大括号语法导入。如下
// import { createNote } from './../reducers/noteReducer'
export const createNote = (content) => {
  return {
    type: 'NEW_NOTE',
    data: {
      content,
      important: false,
      id: generateId()
    }
  }
}

export const toggleImportanceOf = (id) => {
  return {
    type: 'TOGGLE_IMPORTANCE',
    data: { id }
  }
}
export default noteReducer 


