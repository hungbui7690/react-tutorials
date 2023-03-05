/*
  Form: Add Items to List P1

  (***) at the console.log(people) at line 28 > when add item for the first time, it won't log out > when add the 2nd item, it logs out first item... > log out the previous state
*/

import React, { useState } from 'react'

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')

  // (1) setup state
  const [people, setPeople] = useState([]) // array

  const handleSubmit = (e) => {
    e.preventDefault()

    // (2)
    if (firstName && email) {
      // (a) create new person > {firstName: firstName, email: email} >> ES6
      const person = { firstName, email }

      // (b) add person to people array > we must have [... x, y] > otherwise, it will overwrite the whole array
      setPeople((prevPeople) => {
        return [...prevPeople, person]
      })

      // (c) clean up fields
      setFirstName('')
      setEmail('')
      console.log(people)
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

      {/* (3) now, we are using index as unique key, but in the real world, we should not use it > because later, when we remove or add new item, the index will be change > easy to create bugs */}
      {people.map((person, index) => {
        const { id, firstName, email } = person
        return (
          <div key={index} className='item'>
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
        )
      })}
    </article>
  )
}

export default ControlledInputs
