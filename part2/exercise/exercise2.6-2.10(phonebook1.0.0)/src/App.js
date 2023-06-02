import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
  const addOne = (event) => {
    event.preventDefault()
    console.log();
    if(persons.map(person => person.name).includes(newName)) {
      alert(`${newName} 已经存入电话簿中`)
      return
    }
    const personObj = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(personObj))
    setNewName('')
    setNewNumber('')
  }
  const handlerNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handlerNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const search = (event) => {
    const filterPerson = persons.filter(person => {
      const copy = {...person}
      const name = copy.name.toLowerCase()
      const searchName = event.target.value.toLowerCase()
      return name.includes(searchName)
    })
    setPersons(filterPerson)
  }
  return (
    <div>
      <h2>search</h2>
      <form>
        姓名搜索:<input onChange={search}/>
      </form>
      <h2>Phonebook</h2>
      <form onSubmit={addOne}>
        <div>
          name: <input onChange={handlerNameChange} value={newName}/>
        </div>
        <div>number: <input onChange={handlerNumberChange} value={newNumber}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person=>{
        return <p key={person.id}>{person.name} {person.number}</p>
      })}
    </div>
  )
}

export default App