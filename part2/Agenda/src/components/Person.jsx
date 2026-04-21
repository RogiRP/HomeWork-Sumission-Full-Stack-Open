const Person = (props) => {
  return (
    <div>
      {props.person.name} {props.person.number}
      <button onClick={() => props.deletePerson(props.person.id)}>
        delete
      </button>
    </div>
  )
}

export default Person