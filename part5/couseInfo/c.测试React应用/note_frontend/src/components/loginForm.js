import { useState } from "react"
import PropTypes from 'prop-types'

const LoginForm = ({ handleSubmit }) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const userLogin = (event) => {
    event.preventDefault()
    handleSubmit({username, password})
    setUsername('')
    setPassword('')
  }
  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={userLogin}>
        <div>
          username
          <input
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password
          <input
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
      </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}
LoginForm.propTypes= {
  handleSubmit: PropTypes.func.isRequired,
}
export default LoginForm