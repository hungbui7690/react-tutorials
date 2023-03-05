/*
  Form: Add Items to List P1

  (***) use "new Date().getTime().toString()" as Id
*/

import React, { useState } from 'react'

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')

  const [people, setPeople] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (firstName && email) {
      // (1) to make to id more unique, we use getTime() as id
      const person = { id: new Date().getTime().toString(), firstName, email }

      setPeople((prevPeople) => {
        return [...prevPeople, person]
      })

      setFirstName('')
      setEmail('')
    } else {
      console.log('empty values')
    }
  }

  return (
    <article>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='firstName'>Name: </label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email: </label>
          <input
            type='text'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type='submit' onClick={handleSubmit}>
          Add Person
        </button>
      </form>

      {/* (2) */}
      {people.map((person) => {
        const { id, firstName, email } = person
        return (
          <div key={id} className='item'>
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
        )
      })}
    </article>
  )
}

export default ControlledInputs
