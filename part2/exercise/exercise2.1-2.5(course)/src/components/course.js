import React from 'react'
const Course = ({course:{name,parts}}) => {
    const totalNum = parts.reduce((total,part)=>{
      return total + part.exercises
    },0)
    return (
      <div>
        <Header title={name}/>
        <Content parts={parts}/>
        <Total totalNum={totalNum} />
      </div>
    )
  }
  const Header = ({title}) => {
    return (<h2>{title}</h2>)
  }
  const Content = ({parts}) => {
    return (
      <div>
        {parts.map(part=><Part description={part.name} exercises={part.exercises} key={part.id}></Part>)}
      </div>
    )
  }
  const Part = ({description,exercises}) => {
    return <p>{description} {exercises}</p>
  }
  const Total = ({totalNum}) => {
    return <p>total of {totalNum} exercises</p>
  }

  export default Course