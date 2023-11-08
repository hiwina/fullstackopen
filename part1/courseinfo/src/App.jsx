const Header = (props) => {
  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
  }

const Content = (props) => {
  
  return (
    
      <p>{props.name} {props.exercises}</p>

    
  )
}

const Total = (props) => {
  return(
    <p> Number of exercise {props.parts + props.parts1 + props.parts2}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
]

  return (
    <div>
      <Header course={course} />
      <Content name={parts[0].name} exercises={parts[0].exercises} />
      <Content name={parts[1].name} exercises={parts[1].exercises} />
      <Content name={parts[2].name} exercises={parts[2].exercises} />
      <Total parts={parts[0].exercises} parts1={parts[1].exercises} parts2={parts[2].exercises}p/>
      
    </div>
    
  )
}

export default App