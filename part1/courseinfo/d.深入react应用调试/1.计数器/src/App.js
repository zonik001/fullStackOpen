import { useState } from 'react'

const History = (props) => {
  // 条件渲染
  if (props.allClickNum.length === 0) {
    return (
      <div>
        这个app通过点击按钮使用
      </div>
    )
  }
  return (
    <div>
      按钮点击历史: {props.allClickNum.join(' ')}
    </div>
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

  // 1.状态值为对象
  const [clickNum, setClicks] = useState({
    left: 0, right: 0
  })

  // 对象状态修改
  // const handleLeftClick = () => {
  //   const newClicks = {
  //     left: clickNum.left + 1,
  //     right: clickNum.right
  //   }
  //   setClicks(newClicks)
  // }

  // const handleRightClick = () => {
  //   const newClicks = {
  //     left: clickNum.left,
  //     right: clickNum.right + 1
  //   }
  //   setClicks(newClicks)
  // }
  // 对象传播写法  对象中其他不需要改变的属性用 ...对象名 替换 (...对象名需要写在前面)
  const handleLeftClick = () => setClicks({ ...clickNum, left:clickNum.left + 1 })
  const handleRightClick = () => setClicks({ ...clickNum, right:clickNum.right + 1 })

  // const handleLeftClick = () => {
  //   clicks.left++
  //   setClicks(clicks)
  // }
  // **在React中是禁止这样直接改变状态的
  // 改变状态必须始终通过将状态设置为一个新的对象来完成。
  // 如果前一个状态对象的属性没有改变，它们需要简单地复制，这可以通过将这些属性复制到一个新的对象中，并将其设置为新的状态来完成。


  // 2.状态值为数组
  // 为我们的应用添加一块状态，其中包含一个数组allClicks，它可以记住应用中发生的每一次点击。
  const [left1, setLeft] = useState(0)
  const [right1, setRight] = useState(0)
  const [allClickNum, setAll] = useState([])
  const handleLeftClick1 = () => {
    // ** 不要使用push直接改变状态值 （push会改变原数组，concat不会（返回一个新数组））
    setAll(allClickNum.concat('L'))
    setLeft(left1 + 1)
  }
  const handleRightClick1 = () => {
    setAll(allClickNum.concat('R'))
    setRight(right1 + 1)
  }

  return (
    <>
      <div>
        {clickNum.left}
        <Button handleClick={handleLeftClick} text='left' />
        <Button handleClick={handleRightClick} text='right' />
        {clickNum.right}
      </div>
      <br/>
      <div>
        {left1}
        <Button handleClick={handleLeftClick1} text='left' />
        <Button handleClick={handleRightClick1} text='right' />
        {right1}
        <History allClickNum={allClickNum} />
      </div>
    </>
  )
}
export default App