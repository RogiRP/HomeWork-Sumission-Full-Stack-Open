import Person from './Person'

const Persons = (props) => {
  return (
    <div>
      {props.personsToShow.map(person => (
        <Person
          key={person.id}
          person={person}
          deletePerson={props.deletePerson}
        />
      ))}
    </div>
  )
}

export default Persons