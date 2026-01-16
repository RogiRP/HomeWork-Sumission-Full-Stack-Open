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
      <Content
        parts={parts}
      />
      <Total parts={parts}/>
    </div>
  )
}

const Header = (props) =>{
  console.log(props)
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )

}

const Content = (props) =>{
  console.log(props)
  return(
    <div>
      {props.parts.map((part, index)=>(
        <Part key={index} parte={part}/>
      ))}
      
    </div>
  )

}

const Part = (props) =>{
  return(
    <div>
      <p>{props.parte.name} {props.parte.exercises}</p> <br />
    </div>
  )
}

const Total = (props) =>{
  const total = props.parts.reduce(
    (sum, part) => sum + part.exercises,
    0
  )
  return <p>{total}</p>
    
}

export default App