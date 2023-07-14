import React from 'react'
import ReactDOM from 'react-dom/client'
// 组合式还原器的工作方式是每个动作都在组合式还原器的每个部分得到处理 使用redux-toolkit替代
// import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'

import noteReducer from './reducers/noteReducer'
import filterReducer from './reducers/filterReducer'

import { configureStore } from '@reduxjs/toolkit'

// import { createNote } from './reducers/noteReducer'
// import { filterChange } from './reducers/filterReducer'

// const reducer = combineReducers({
//   notes: noteReducer,
//   filter: filterReducer
// })
// const store = createStore(reducer)
// console.log(store.getState())

// 使用reduxtoolkit提供的函数更简单方便
const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer
  }
})


// 简单测试
// store.subscribe(() => console.log(store.getState()))
// store.dispatch(filterChange('IMPORTANT'))
// store.dispatch(createNote('combineReducers forms one reducer from many simple reducers'))


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)