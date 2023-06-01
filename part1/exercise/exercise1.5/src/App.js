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
  console.log(props.parts)
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
// 把课程和它的部分改成一个单一的JavaScript对象。修复所有破坏的地方。
const App = () => {
  const course = {
    name: '单一的JavaScript对象',
    parts: [
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
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts} />
      <Total TotalNum={course.parts}/>
    </div>
  )
}

export default App

      