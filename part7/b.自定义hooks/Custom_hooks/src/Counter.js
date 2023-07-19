import { useState } from 'react'

const Display = ({counter})=> <div>{counter}</div>
const Button = ({ onClick, text }) => {
  return(
    <button onClick={onClick}>{text}</button>
  )
}

// 创建自定义钩子
const useCounter = () => {
  const [ value, setValue ] = useState(0)
  const addOne = () => {setValue(value + 1)}
  const decreaseByOne = () => setValue(value - 1)
  const setToZero = () => setValue(0)
  return {
    value,
    addOne,
    decreaseByOne,
    setToZero
  }
}
const App = () => {
  // 注册钩子
  const counter = useCounter()

  // 重复使用钩子创建了两个完全独立的计数器,里面的状态值都是独立的
  const bottom = useCounter()

  return (
    <>
      <Display counter={counter.value}/>
      <Button onClick={counter.addOne} text="加1"/>
      <Button onClick={counter.decreaseByOne} text="减1"/>
      <Button onClick={counter.setToZero} text="归0"/>

      <Display counter={bottom.value}/>
      <Button onClick={bottom.addOne} text="加1"/>
    </>
  )
}
export default App