import { useState } from 'react'

const Statistics = ({good,neutral,bad,all,avgGrade,positiveRate}) => {
  if(all === 0) {
    return (
      <div>
        <h1>数据统计</h1>
        <p>暂无反馈</p>
      </div>
    )
  }
  return(
    <div>
      <h1>数据统计</h1>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="all" value ={all} />
      <StatisticLine text="avg" value ={avgGrade()} />
      <StatisticLine text="positive" value ={positiveRate()} />
    </div>
  )
}
const StatisticLine = ({text,value}) => {
  return (
    <p>{text} {value}</p>
  )
}
const Button = ({handleClick,text})=> {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0) 
  const [neutral, setNeutral] = useState(0) 
  const [bad, setBad] = useState(0) 
  const [all, setAll] = useState(0) 
  const [grade, setrade] = useState([])
  const goodClick = () => {
    setGood(good + 1)
    setAll(all + 1)
    setrade(()=> grade.concat(1))
  }
  const neutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    setrade(()=> grade.concat(0))
  }
  const badClick = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setrade(()=> grade.concat(-1))
  }
  const avgGrade = () => {
    let sum = grade.reduce((total,item)=>{
      return total + item
    },0)
    return sum / all
  }
  const positiveRate = () => good / all
  return (
    <>
      <h1>用户反馈</h1>
      <Button handleClick={goodClick} text={'good'}></Button>
      <Button handleClick={neutralClick} text={'neutral'}></Button>
      <Button handleClick={badClick} text={'bad'}></Button>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} avgGrade={avgGrade} positiveRate={positiveRate}></Statistics>
    </>
  )
}
export default App