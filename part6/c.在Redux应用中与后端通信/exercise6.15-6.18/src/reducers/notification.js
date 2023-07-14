import { createSlice } from '@reduxjs/toolkit'

const initialState = 'there are notification'

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        changeNotify(state, action) {
            console.log(state);
            const content = action.payload
            const notify = `you vote ${content} `
            return notify
        },
        deleteNotify(state, action) {
            return initialState
        }
    }
})

export const { changeNotify, deleteNotify } = notificationSlice.actions

// 通知
export const setNotification = (msg,time) => {
    return async dispatch => {
        dispatch(changeNotify(msg))
        setTimeout(()=>{
            dispatch(deleteNotify())
        },time*1000)
    }
  }
export default notificationSlice.reducer