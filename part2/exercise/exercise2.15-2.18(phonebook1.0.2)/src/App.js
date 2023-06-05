import { useState, useEffect } from 'react'
import Person from './components/person'
import api from './services/api'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
  useEffect(()=>{
    api
      .getAll()
      .then(initialPersons=> {
        setPersons(initialPersons)
      })
  },[])
  const addOne = (event) => {
    event.preventDefault()
    const personObj = {
      name: newName,
      number: newNumber
    }
    // const newNameID = persons.find(person => person.name === newName).id  //错误的，没有id
    // console.log(newNameID);
    if(persons.map(person => person.name).includes(newName)) {
      window.confirm(`${newName} 已经存入电话簿中,是否要更换号码`)
      // 获取被修改数据的id
        
      api
        .update()
        .then(returnedPerson => {
          
        })
      
    } else {
      api
      .create(personObj)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
    }
    
    
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
  const deletePerson = id => {
    const delName = persons.find(person => person.id === id).name
    window.confirm(`delete ${delName}`)  
    api
      .deleteOne(id)
      .then(
        returnedPerson => {
          console.log(returnedPerson); //{} 空对象
          // const filterPerosn = persons.filter(person => person.id !== id)
          // setPersons(filterPerosn)
          api
          .getAll()
          .then(filterPerosn=> {
            setPersons(filterPerosn)
          })
        }
      )
    
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
        return <Person person={person} key={person.id} toggleDelete={()=>deletePerson(person.id)}/>
      })}
    </div>
  )
}

export default App