import axios from 'axios'

// const baseUrl = 'http://localhost:3001/notes'
const baseUrl = '/api/notes' //由于前后端在同一个地址，省去服务器部分,改为相对路径
const getAll = () => {
    // return axios.get(baseUrl).then(response => response.data)  //then 一块封装

    // 模拟错误情况
    const request = axios.get(baseUrl)
    const nonExisting = {
        id: 10000,
        content: 'This note is not saved to server',
        date: '2019-05-30T17:30:31.098Z',
        important: true,
    }
    return request.then(response => response.data.concat(nonExisting))
}
const create = newObject => {
    // return axios.post(baseUrl, newObject)  //不封装 .then
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data) //then返回的response.data会作为下一个then函数的实参值被接收
}
const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

export default {
    getAll: getAll,
    create,
    update
}