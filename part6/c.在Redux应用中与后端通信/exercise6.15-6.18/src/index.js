import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import App from './App'
import reducer from './reducers/anecdoteReducer'
import notification from './reducers/notification'
import filter from './reducers/filterReducer'

// const store = createStore(reducer)
const store = configureStore({
  reducer: {
    anecdote: reducer,
    notification,
    filter
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)