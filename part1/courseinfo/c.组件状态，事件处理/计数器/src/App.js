// import { useState } from 'react'

// const App = () => {
//   // console.log(useState); 
//   //ƒ useState(initialState) {
//   //   var dispatcher = resolveDispatcher();
//   //   return dispatcher.useState(initialState);
//   // }
//   const [ counter, setCounter ] = useState(0)

//   const handleClick = () => {
//     console.log('clicked')
//     setCounter(counter + 1)
//   }
//   // setTimeout(
//   //   () => setCounter(counter + 1),
//   //   1000
//   // )
//   console.log('rendering...', counter)
//   return (
//     <>
//       <div>{counter}</div>
//       <button onClick={handleClick}>增加</button>
//       <button onClick={() => setCounter(0)}> 
//         归0
//       </button>
//       {/* 一般还是将事件处理定义在外面 */}
//     </>
//   )
// }
// export default App

// 重构
import { useState } from 'react'

const Display = ({counter})=> <div>{counter}</div>
const Button = ({ onClick, text }) => {
  return(
    <button onClick={onClick}>{text}</button>
  )
}
const App = () => {
  const [ counter, setCounter ] = useState(0)

  const addOne = () => {
    console.log('clicked')
    setCounter(counter + 1)
  }
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  console.log('rendering...', counter)
  return (
    <>
      <Display counter={counter}/>
      <Button onClick={addOne} text="加1"/>
      <Button onClick={decreaseByOne} text="减1"/>
      <Button onClick={setToZero} text="归0"/>
    </>
  )
}
export default App