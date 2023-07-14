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
export default notificationSlice.reducer