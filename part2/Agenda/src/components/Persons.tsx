type Person = {
  name: string
  number: string
}

const Persons = ({ persons }: { persons: Person[] }) => (
  <div>
    {persons.map(person => (
      <div key={person.name}>
        {person.name} {person.number}
      </div>
    ))}
  </div>
)

export default Persons
