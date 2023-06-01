const Header = (props)=> {
  return (
    <h1>{props.course}</h1>
  )
}
const Part = (props)=> {
  return (
    <p>{props.part.name} {props.part.exercises}</p>
  )
}

const Content = (props)=> {
  return (
    <>
    <Part part={props.part1} />
    <Part part={props.part2} />
    <Part part={props.part3} />
    </>
  )
}
const Total = (props)=> {
  return (
  <p>练习次数合计 {props.TotalNum}</p> 
  )
}
// 应用中使用对象。修改App组件的变量定义，如下所示，同时重构应用，使其仍能工作。
const App = () => {
  const course = '半堆栈应用程序开发'
  const part1 = {
    name: 'React基础',
    exercises: 10
  }
  const part2 = {
    name: '使用 props 传递数据',
    exercises: 7
  }
  const part3 = {
    name: '组件状态',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} part2={part2} part3={part3} />
      <Total TotalNum={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

export default App

      