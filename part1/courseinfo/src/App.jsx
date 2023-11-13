const Header = ({course}) => {
  return (
    <>
    <h1>{course.name}</h1>
    </>
  )
  }

const Content = ({course}) => {
  return (
    <div>
        {course.parts.map(part =>  
        <p key={part.name}>{part.name} {part.exercises}</p>

  )}

      
</div>
    
  )
}

const Total = ({course}) => {
  let total = 0
    course.parts.map(part => {
      total += part.exercises
      return total
    })
  
  return (

    <p> Number of Exercises: {total}</p>    

  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>

  )
}

export default App