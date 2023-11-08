const Header = (props) => {
  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
  }

const Content = (props) => {
  
  return (
    <>
      <p>{props.name} {props.exercises}</p>
    </>
  )
}

const Total = (props) => {
  return(
  <p> Number of exercise {props.part1 + props.part2 + props.part3}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content name={part1.name} exercises={part1.exercises} />
      <Content name={part2.name} exercises={part2.exercises} />
      <Content name={part3.name} exercises={part3.exercises} />
      <Total part1={part1.exercises} part2={part2.exercises} part3={part3.exercises}  />
    </div>
  )
}

export default App