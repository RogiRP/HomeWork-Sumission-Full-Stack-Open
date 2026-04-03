import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' ,
      number: '9993321112'
    },
    { name: 'Ada Lovelace', 
      number: '1241244566' 
    },
    { name: 'Dan Abramov', 
      number: '114214564365'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>{

    setNewName(event.target.value)
  }

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setFilter(event.target.value)
  }

  const addPerson = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const existingPerson = persons.some(
      person => person.name === newName
    )

    if (existingPerson){
      alert(`${newName} is already added to phonebook`)
      return
    }

    const personObject = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        filter shown with <input value={filter} onChange={handleFilterChange} />
      </div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      
      {personsToShow.map(person =>(
        <div key={person.name}>{person.name}{person.number}</div>
      ))}
      
    </div>
  )
}

export default App