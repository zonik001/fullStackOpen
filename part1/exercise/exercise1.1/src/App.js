const Header = (props)=> {
  return (
    <h1>{props.course}</h1>
  )
}
const Content = (props)=> {
  return (
    <>
    <p>{props.part1} {props.exercises1}</p>
    <p>{props.part2} {props.exercises2}</p>
    <p>{props.part3} {props.exercises3}</p>
    </>
  )
}
const Total = (props)=> {
  return (
  <p>练习次数合计 {props.TotalNum}</p> 
  )
}
const App = () => {
  const course = '半堆栈应用程序开发'
  const part1 = 'React基础'
  const exercises1 = 10
  const part2 = '使用 props 传递数据'
  const exercises2 = 7
  const part3 = '组件状态'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
      <Total TotalNum={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App

      