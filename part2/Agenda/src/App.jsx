import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification  from './components/Notificacion'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    personService.getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    const existingPerson = persons.find(
      person => person.name === newName
    )

    if (existingPerson) {
      const confirmReplace = window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
      )
      if (!confirmReplace) {
        return
      }
      const updatePerson = {
        ...existingPerson, 
        number: newNumber
      }
      personService.update(existingPerson.id, updatePerson).then(returnedPerson => {
        setPersons(persons.map(person =>
          person.id !== existingPerson.id ? person : returnedPerson
        ))
        setNewName('')
        setNewNumber('')

        setMessage(`Changed ${returnedPerson.name}'s number`)

        setTimeout(() => {
          setMessage(null)
        }, 3500)   
      })
      return
    }

    const personObject = {
      name: newName,
      number: newNumber
    }

    personService.create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')

        setMessage(`Added ${returnedPerson.name}`)

        setTimeout(()=> {
          setMessage(null)
        }, 3500)
      })
  }

  const deletePerson = (id) => {
    const person = persons.find(p => p.id === id)

    const confirmDelete = window.confirm(
      `Delete ${person.name}?`
    )

    if (!confirmDelete) {
      return
    }

    personService.remove(id)
      .then(() => {
        setPersons(persons.filter(p => p.id !== id))
      })
  }

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={message} />

      <Filter
        filter={filter}
        handleFilterChange={handleFilterChange}
      />

      <h2>Add a new</h2>

      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>

      <Persons
        personsToShow={personsToShow}
        deletePerson={deletePerson}
      />
    </div>
  )
}

export default App