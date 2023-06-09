require('dotenv').config() //环境变量插件dotenv引入 .env文件中的环境变量是全局可用的
// 使用方式 const url = process.env.MONGODB_URI  const PORT = process.env.PORT || 3001

const express = require('express')
const cors = require('cors')
const app = express()
const Note = require('./models/note')


app.use(cors())

app.use(express.json())
// json-parser 是在 requestLogger 中间件之前被使用的，因为否则在执行记录器的时候，request.body 将不会被初始化。
const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('--------------')
    next()
}
app.use(requestLogger)

// 使用前端打包静态文件
app.use(express.static('build'))

// 错误处理中间件
const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }

  next(error)
}
app.use(errorHandler)


app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})
  
app.get('/api/notes', (request, response) => {
    Note.find({}).then(notes => {
        response.json(notes)
    })
})

// 单条请求
app.get('/api/notes/:id', (request, response, next) => {
    Note.findById(request.params.id).then(note => {
      if(note) {
        response.json(note)
      }else {
        response.status(404).end()
      }
    }).catch(error => next(error))
})

// 单条删除
app.delete('/api/notes/:id', (request, response, next) => {
    Note.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

// 更改重要性
app.put('/api/notes/:id', (req, res,next) => {
  const body = req.body
  const note = {
    content: body.content,
    important: body.important
  }
  //{ new: true }参数 会让updatedNote获取到新文档（默认false)
  Note.findByIdAndUpdate(req.params.id, note, {new: true})
    .then(updatedNote => {
       res.json(updatedNote)
    })
    .catch(error => {
      console.log('dsadasdas');
      next(error)
    })
})

// // 生成id  mongod会为文档生成id
// const generateId = ()=> {
//     const maxId = notes.length > 0
//     ? Math.max(...notes.map(n => n.id))
//     : 0
//     return maxId + 1
// }

// 添加
app.post('/api/notes', (request, response) => {
    const body = request.body

  if (!body.content) {
    return response.status(400).json({
      error: 'content 丢失'
    })
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
    date: new Date(),
  })

  note.save().then(savedNote => {
    response.json(savedNote)
  })

})
const PORT = process.env.PORT || 3001
app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`)
})
