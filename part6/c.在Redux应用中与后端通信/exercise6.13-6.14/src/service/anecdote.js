import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdote'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async (content) => {
    const obj = {
        content,
        vote: 0
    }
    const response = await axios.post(baseUrl, obj)
    return response.data
}

const anecdotesService = { getAll, createNew }
export default anecdotesService