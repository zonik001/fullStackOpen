import ReactDOM from 'react-dom/client'
// import App from './reactBootstrap'
import App from './material'
import {
  BrowserRouter as Router,
} from "react-router-dom"


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
)