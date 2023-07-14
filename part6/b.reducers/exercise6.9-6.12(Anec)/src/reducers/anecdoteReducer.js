import { createSlice } from '@reduxjs/toolkit' //toolKit目前用了cofigura创建store及这块的
const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

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
      state.push({
        content,
        id: getId(),
        votes: 0
      })
    },
    handleVote(state, action) {
      const id = action.payload
      const anecdoteToChange = state.find(anecdote => id === anecdote.id)
      const changeaAecdote = {...anecdoteToChange, votes: anecdoteToChange.votes + 1}
      const newArr = state.map(anecdote => anecdote.id === id ? changeaAecdote : anecdote)
      return newArr.sort((a,b) => b.votes - a.votes)
    }
  }
})

export const { createAecdote, handleVote } = anecdoteSlice.actions
export default anecdoteSlice.reducer