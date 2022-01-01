import React, { useState } from 'react'

const PersonForm = ({newName, handleNameChange, newNumber, handleNumberChange, setNewName, setNewNumber, persons, setPersons}) => {
  const addPerson = (event) => {
    event.preventDefault()
    const onks = persons.forEach(person => {
      console.log(person.name, newName)
      if (person.name === newName) {
        console.log('eka true')
        return true
      }
      console.log('toka true')
      return true
    })

    console.log('onks', onks)
    
    if (onks === true) {
      alert(newName, 'has been already added to the phonebook')
    } else {
      setPersons(persons.concat({name: newName, number: newNumber}))
      console.log(persons)
      console.log('tapahtu')
    }
    setNewName('')
    setNewNumber('')
  }

  return (
    <>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number: <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  )
}

const Person = ({person}) => {
  return (
  <>
    <p>{person.name} {person.number}</p>
  </>
  )
}

const Persons = ({persons, newFilter}) => {
  const filtered = persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))


  return (
    <>
      <ul>
        {filtered.map(person => <Person key={person.name} person={person} />)}
      </ul>
    </>
  )
}

const Filter = ({newFilter, handleFilterChange}) => {
  return (
    <>
      filter shown with <input
        value={newFilter}
        onChange={handleFilterChange}
      />
    </>
  )
}



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>
      <PersonForm newName={newName} handleNameChange={handleNameChange} 
      newNumber={newNumber} handleNumberChange={handleNumberChange} setNewName={setNewName} 
      setNewNumber={setNewNumber} persons={persons} setPersons={setPersons}/>
      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter} />
    </div>
  )

}

export default App
