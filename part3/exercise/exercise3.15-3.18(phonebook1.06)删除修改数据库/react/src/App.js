import { useState, useEffect } from 'react'
import Person from './components/person'
import Notification from './components/notify'
import api from './services/api'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
  useEffect(()=>{
    // 错误测试，添加一条服务端不存在的数据
    const noneData = {
      name: '错误测试数据',
      number: '11111111'
    }
    api
      .getAll()
      .then(initialPersons=> {
        setPersons(initialPersons.concat(noneData))
      })
      .catch(error => {
        console.log(error.response.data)
      })
  },[])
  const addOne = (event) => {
    event.preventDefault()
    const personObj = {
      name: newName,
      number: newNumber
    }
    
    // console.log(newNameID);
    const result = persons.map(person => person.name).includes(newName)
    if(result) {
      window.confirm(`${newName} 已经存入电话簿中,是否要更换号码`)
      // 获取被修改数据的id
      const newNameID = persons.find(person => person.name === newName).id
      // 获取数组元素下标
      const index = persons.findIndex(person => person.name === newName)
      console.log(index);
      api
        .update(newNameID,personObj)
        .then(returnedPerson => {
          const copy = [...persons]
          copy.splice(index,1,returnedPerson)
          setPersons(copy)
        })
        .catch(error => {
          console.log(error.response.data)
        })
    } else {
      api
      .create(personObj)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
      .catch(error => {
        console.log(error.response.data)
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
      ).catch(err => {
        setErrMessage('此数据不存在')
        setTimeout(()=> {
          setErrMessage(null)
        },5000)
      })
    
  }
  const [errMessage, setErrMessage] = useState('错误提示')
  return (
    <div>
      <Notification message={errMessage}/>
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