const Hellow = (props) => {
  return (
    <div>
      <p>hello {props.name}, 你今年{props.age}岁了</p>
    </div>
  )
}
const App = () => {
  const name = 'zhangsan'
  const age = '20'
  return (
    <>
      <h1>问候组件</h1>
      <Hellow name="hubohan" age={10 + 14}/>
      <Hellow name={name} age={age}/>
    </>
  )
}
export default App;
