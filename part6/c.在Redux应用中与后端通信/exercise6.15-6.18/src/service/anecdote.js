import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdote'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async (content) => {
    const obj = {
        content,
        votes: 0
    }
    const response = await axios.post(baseUrl, obj)
    return response.data
}

const updata = async (id, newObj) => { 
    const res = await axios.put(`${baseUrl}/${id}`, newObj)
    return res.data
}

const anecdotesService = { getAll, createNew, updata }
export default anecdotesService
