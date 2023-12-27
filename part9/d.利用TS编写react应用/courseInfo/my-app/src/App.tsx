
import './App.css';


const App = () => {
  interface WelcomeProps {
    name: string;
  }

  const Welcome = (props: WelcomeProps) => {
    return <h1>Hello, {props.name}</h1>;
  };

  return (
    <>
      <Welcome name="Sara" />
    </>
  )
}

export default App;
