require('dotenv').config() //环境变量插件dotenv引入 .env文件中的环境变量是全局可用的

const Person = require('./models/person')
const express = require('express')
const morgan = require('morgan') //不知道干啥的
const cors = require('cors')  //解决跨域 前端3000端口请求到3001端口


const app = express()

app.use(express.json())

app.use(morgan('dev'))
app.use(cors()) //跨域

// const requestLogger = (request, response, next) => {
//   console.log('Method:', request.method)
//   console.log('Path:  ', request.path)
//   console.log('Body:  ', request.body)
//   console.log('--------------')
//   next()
// }
// app.use(requestLogger)

// step1
app.get('/api/persons',(req,res,next) => {
  Person.find({}).then(persons => {
    res.json(persons)
  })
})
// step2
app.get('/info', (req, res) => {
  res.send(`PhoneBook has info for ${persons.length} people<br/> ${new Date()}`)
})
// step3
app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  let person = persons.find(person => person.id === id)
  if(person) {
    res.json(person)
  } else {
    res.status(404).end('Not Found')
  }
})
// step4
app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)
  res.status(204).end()
})
// step5 and step6
// const genarateId = ()=> {
//   return Math.floor(Math.random() * 100)
// }

app.post('/api/persons', (req, res) => {
  const body = req.body
  // console.log(body,persons.every(person => person.name !== body.name));
  if(!body.name) {
    return res.status(400).json({
        error: 'name mission'
    })
  } else if(!body.number) {
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
  })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=> {
    console.log('app start ,3001 port listen');
})