const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(express.json())
app.use(morgan)

// const requestLogger = (request, response, next) => {
//   console.log('Method:', request.method)
//   console.log('Path:  ', request.path)
//   console.log('Body:  ', request.body)
//   console.log('--------------')
//   next()
// }
// app.use(requestLogger)

let persons = [
    {
      "id": 1,
      "name": "Arto Hellas",
      "number": "040-123456"
    },
    {
      "id": 2,
      "name": "Ada Lovelace",
      "number": "39-44-5323523"
    },
    {
      "id": 3,
      "name": "Dan Abramov",
      "number": "12-43-234345"
    },
    {
      "id": 4,
      "name": "Mary Poppendieck",
      "number": "39-23-6423122"
    }
]
// step1
app.get('/api/persons',(req,res,next) => {
  res.json(persons)
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
const genarateId = ()=> {
  return Math.floor(Math.random() * 100)
}

app.post('/api/persons', (req, res) => {
  const body = req.body
  console.log(body,persons.every(person => person.name !== body.name));
  if(!body.name) {
    return res.status(400).json({
        error: 'name mission'
    })
  } else if(!body.number) {
    return res.status(400).json({
      error: 'number mission'
    })
  } else if(persons.some(person => person.name === body.name)) {
    return res.status(400).json({
      error: 'name must be unique'
    })
  }
  const person = {
    id: genarateId(),
    name: body.name,
    number: body.number
  }
  persons = persons.concat(person)
  console.log(person);
  res.json(persons)
})

app.listen(3001, ()=> {
    console.log('app start ,3000 port listen');
})