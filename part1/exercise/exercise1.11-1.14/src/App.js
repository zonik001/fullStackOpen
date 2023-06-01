import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [points,setPoints] = useState([0,0,0,0,0,0,0])

  const change = () => {
    let num = Math.floor(Math.random() * 7) 
    setSelected(num)
  }
  const vote = ()=> {
    // 更新存储在复杂数据结构（如对象和数组）中的状态的正确方法是制作一个状态的副本。
    // 不要直接对组件状态修改
    // 创建一个副本修改
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  const mostVote = ()=> {
    let most = Math.max(...points)
    let index =  points.indexOf(most)
    return anecdotes[index]
  }

  return (
    <div>
      <h1>每日一句</h1>
      {anecdotes[selected]}
      <br />
      <p>投票数 {points[selected]}</p>
      <button onClick={vote}>vote</button>
      <button onClick={change}>change</button>
      <hr />
      <h1>最高投票</h1>
      {mostVote()}
    </div>
  )
}

export default App