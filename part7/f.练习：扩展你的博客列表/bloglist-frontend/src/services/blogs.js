import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null
const setToken = newToken => {
    token = `bearer ${newToken}`
}
const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const update = async (id, updatedObj) => {
  const response = await axios.put(`${baseUrl}/${id}`, updatedObj)
  return response.data
} 

const deleteApi = async id => {
  const response = await axios.delete(`${baseUrl}/${id}`)
  return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, setToken, update, deleteApi }