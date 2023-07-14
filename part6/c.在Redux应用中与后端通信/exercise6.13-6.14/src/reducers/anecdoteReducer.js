import { createSlice } from '@reduxjs/toolkit' //toolKit目前用了cofigura创建store及这块的

const initialState = []

// const reducer = (state = initialState, action) => {
//   switch(action.type) {
//      case 'HANDLE_VOTE': {
//         const id = action.data.id
//         const anecdoteToChange = state.find(anecdote => id === anecdote.id)
//         const changeaAecdote = {...anecdoteToChange, votes: anecdoteToChange.votes + 1}
//         const newArr = state.map(anecdote => anecdote.id === id ? changeaAecdote : anecdote)
//         return newArr.sort((a,b) => b.votes - a.votes)
//      }
//      case 'CREATE':
//         return [...state, action.data]
//   }
    

//   return state
// }

// export const handleVote = (id) => {
//   return {
//     type: 'HANDLE_VOTE',
//     data: { id }
//   }
// }

// export const createAecdote = (content) => {
//   console.log(content);
//   return {
//     type : 'CREATE',
//     data: {
//       content,
//       id: getId(),
//       votes: 0
//     }
//   }
// }

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState,
  reducers: {
    createAecdote(state, action) {
      const content = action.payload
      state.push(content)
    },
    handleVote(state, action) {
      const id = action.payload
      const anecdoteToChange = state.find(anecdote => id === anecdote.id)
      const changeaAecdote = {...anecdoteToChange, votes: anecdoteToChange.votes + 1}
      const newArr = state.map(anecdote => anecdote.id === id ? changeaAecdote : anecdote)
      return newArr.sort((a,b) => b.votes - a.votes)
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdote(state, action) {
      return action.payload
    }
  }
})

export const { createAecdote, handleVote, setAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer