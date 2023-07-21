import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import 'core-js/stable/index.js'
import 'regenerator-runtime/runtime.js' //解决async/await，浏览器在某些浏览器上将不会渲染任何东西

ReactDOM.createRoot(document.getElementById('root')).render(<App />)