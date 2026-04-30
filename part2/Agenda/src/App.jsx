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
  const [notification, setNotification] = useState(null)

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

        showNotificacition(`Changed ${returnedPerson.name}'s number`, 'success')
      })
      .catch(error => {
        showNotificacition(error.response.data.error, 'error')
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

        showNotificacition(`Added ${returnedPerson.name}`, 'success')
      })
      .catch(error => {
        showNotificacition(error.response.data.error, 'error')
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
        showNotificacition(`Deleted ${person.name}`, 'success')
      })
      .catch(() => {
        showNotificacition(
          `Information of ${person.name} has already been removed from server`,
          'error'
        )
        setPersons(persons.filter(p => p.id !== id))
      })
  }

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  const showNotificacition = (message, type = 'success') => {
    setNotification({message, type})

    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification notification={notification} />

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