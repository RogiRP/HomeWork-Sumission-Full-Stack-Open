import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' ,
      number: '9993321112'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  

  const handleNameChange = (event) =>{

    setNewName(event.target.value)
  }

  const handleNumberChange = (event) =>{
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
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

  

  return (
    <div>
      <h2>Phonebook</h2>
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
      
      {persons.map(person =>(
        <div key={person.name}>{person.name}{person.number}</div>
      ))}
      
    </div>
  )
}

export default App