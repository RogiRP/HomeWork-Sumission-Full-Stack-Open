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
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />
      <Total part1={part1} part2={part2} part3={part3}/>
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
      <Part parte={props.part1}/>
      <Part parte={props.part2}/>
      <Part parte={props.part3}/>
    </div>
  )

}

const Part = (props) =>{
  console.log(props)
  return(
    <div>
      <p>{props.parte.name} {props.parte.exercises}</p> <br />
    </div>
  )
}

const Total = (props) =>{
  console.log(props)
  return(
    <div>
      <p>{props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
    </div>
  )
}

export default App