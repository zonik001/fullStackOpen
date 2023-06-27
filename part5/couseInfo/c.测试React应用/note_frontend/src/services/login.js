import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/login'

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

// 暂时消除 Assign object to a variable before exporting as module default警告
const obj = {login}
export default obj