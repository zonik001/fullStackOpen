interface MyProps {
  id: number;
  name: string;
  exerciseCount: number;
}
const Header = ({ name }: { name: string }) => {
  return (
    <h1>{name}</h1>
  )
}

const Part = ({ name, exerciseCount }: { name: string, exerciseCount: number }) => {
  return (
    <div>
      {name} {exerciseCount}
    </div>
  )
}
const Content = ({ courseParts }: { courseParts: Array<MyProps> }) => {
  return (
    <div>
      <ul>
        {courseParts.map(item => <Part name={item.name} exerciseCount={item.exerciseCount} key={item.id} />)}
      </ul>
    </div>
  )
}

const Total = ({ courseParts }: { courseParts: Array<MyProps> }) => {
  return (
    <div>
      {courseParts.reduce((total, item) => total + item.exerciseCount, 0)}
    </div>
  )
}
const App = () => {
  const courseName = "Half Stack application development";
  const courseParts = [
    {
      id: 1,
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      id: 2,
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      id: 3,
      name: "Deeper type usage",
      exerciseCount: 14
    }
  ];

  return (

    <div>
      <Header name={courseName} />
      <Content courseParts={courseParts} />
      <Total courseParts={courseParts} />
    </div>
  );
};

export default App;