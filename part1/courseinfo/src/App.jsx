const Header = (course) => {
  return (
    <>
    <h1>{course.course}</h1>
    </>
  )
  }

const Content = ({parts}) => {
  return (
    <div>
        {parts.map(part =>  
        <p key={part.name}>{part.name} {part.exercises}</p>

  )}

      
</div>
    
  )
}

const Total = ({parts}) => {
  let total = 0
    parts.map(part => {
      total += part.exercises
      return total
    })
  
  return (

    <p> Number of Exercises: {total}</p>    

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
      <Content parts={parts}/>
      <Total parts={parts} />
    </div>

  )
}

export default App