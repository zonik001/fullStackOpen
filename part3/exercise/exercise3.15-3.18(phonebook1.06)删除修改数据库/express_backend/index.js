require('dotenv').config() //环境变量插件dotenv引入 .env文件中的环境变量是全局可用的

const Person = require('./models/person')
const express = require('express')
const morgan = require('morgan') //不知道干啥的
const cors = require('cors')  //解决跨域 前端3000端口请求到3001端口


const app = express()

app.use(express.json())

app.use(morgan('dev'))
app.use(cors()) //跨域

app.use(express.static('build'))

// const requestLogger = (request, response, next) => {
//   console.log('Method:', request.method)
//   console.log('Path:  ', request.path)
//   console.log('Body:  ', request.body)
//   console.log('--------------')
//   next()
// }
// app.use(requestLogger)
const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })

  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}
app.use(errorHandler)


// step1
app.get('/api/persons',(req,res) => {
  Person.find({}).then(persons => {
    res.json(persons)
  })
})
// step2
app.get('/info', (req, res) => {
  Person.find({}).then(persons => {
    res.send(`PhoneBook has info for ${persons.length} people<br/> ${new Date()}`)
  })
})
// step3
app.get('/api/persons/:id', (req, res, next) => {
  Person.findOne({_id: req.params.id}).then(person => {
    if(person) {
      res.json(person)
    } else {
      res.status(404).end('Not Found')
    }
  })
  .catch(err => next(err))
})
// step4
app.delete('/api/persons/:id', (req, res, next) => {
  Person.findOneAndDelete({_id: req.params.id})
    .then(result => {
      if (result) {
        res.status(204).end() // 删除成功，无需返回数据，返回204状态码
      } else {
        res.status(404).end('Not Found') // 没有找到要删除的文档，返回404状态码
      }
    })
    .catch(err => next(err)) //把错误传递给Express的错误处理中间件
})
// step5 and step6
// const genarateId = ()=> {
//   return Math.floor(Math.random() * 100)
// }

app.post('/api/persons', (req, res, next) => {
  const body = req.body
  // console.log(body,persons.every(person => person.name !== body.name))
  if(!body.name) {
    return res.status(400).json({
        error: 'name mission'
    })
  } else if(body.number === undefined) {
    return res.status(400).json({
      error: 'number mission'
    })
  }
  // } else if(persons.some(person => person.name === body.name)) {
  //   return res.status(400).json({
  //     error: 'name must be unique'
  //   })
  // }
  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person.save().then(savedPerson => {
    res.json(savedPerson)
  }).catch(error => {
    next(error)
  })
})

app.put('/api/persons/:id', (req, res, next) => {
  const body = req.body
  const person = {
    name: body.name,
    number: body.number
  }

  Person.findByIdAndUpdate(req.params.id, person, {new: true})
    .then(updatePerson=> {
      res.json(updatePerson)
    })
    .catch(err => next(err))
})

const process = process
const PORT = process.env.PORT || 3001
app.listen(PORT, ()=> {
    console.log('app start ,3001 port listen')
})