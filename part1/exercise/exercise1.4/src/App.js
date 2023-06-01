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
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} />
    </>
  )
}
const Total = (props)=> {
  return (
  <p>练习次数合计 {props.TotalNum.reduce((total,item)=> {
    return total + item.exercises
  },0)}</p> 
  )
}
// 将App的变量定义修改为以下形式，并相应地修改应用的其他部分。
const App = () => {
  const course = '半堆栈应用程序开发'
  const parts = [
    {
      name: 'React基础',
      exercises: 10
    },
    {
      name: '使用 props 传递数据',
      exercises: 7
    },
    {
      name: '组件状态',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} />
      <Total TotalNum={parts}/>
    </div>
  )
}

export default App

      