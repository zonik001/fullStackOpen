import ReactDOM from 'react-dom/client'
// import App from './reactBootstrapApp' //bootStrapui框架
import App from './materialApp' //materialUI框架
import {
  BrowserRouter as Router,
} from "react-router-dom"


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
)