import { createSlice } from '@reduxjs/toolkit' //toolKit目前用了cofigura创建store及这块的
import anecdotesService from '../service/anecdote'

const initialState = []

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState,
  reducers: {
    handleVote(state, action) {
      const changeaAecdote = action.payload
      const id = changeaAecdote.id
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

export const { handleVote, appendAnecdote, setAnecdote } = anecdoteSlice.actions

// 初始化
export const initializeAnec = () => {
  // 直接返回异步块（这个包下载后直接使用就行，参数是派发器和getState）
  // npm install redux-thunk
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
    dispatch(setAnecdote(anecdotes))
  }
}

// 添加
export const createAecdote = (content) =>{
  return async dispatch => {
    const newAnecdote = await anecdotesService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

// 修改
export const updataAecdote = (id) => {
  return async (dispatch, getState) => {
    const anecdotes = getState().anecdote
    const anecdoteToChange = anecdotes.find(anecdote => id === anecdote.id)
    const changeaAecdote = {...anecdoteToChange, votes: anecdoteToChange.votes + 1}
    const votedAnecdote = await anecdotesService.updata(id, changeaAecdote)
    dispatch(handleVote(votedAnecdote))
  }
}


export default anecdoteSlice.reducer