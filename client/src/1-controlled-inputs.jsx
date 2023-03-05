/*
  Form: Multiple Inputs
  - there are 2 inputs right now > but later, if we have 10 inputs or more > we don't want to have 10 states & 10 functions for each inputs 

  (1) create another input for age
  (2) create state for new input we just created

  > in the next lesson, we will use only 1 state to control multiple inputs

*/

import React, { useState } from 'react'

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])

  // (1)
  const [age, setAge] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email }
      console.log(person)
      setPeople((people) => {
        return [...people, person]
      })
      setFirstName('')
      setEmail('')
    } else {
      console.log('empty values')
    }
  }

  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* (2) add 1 more input  */}
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='age'
              id='age'
              name='age'
              value={age} // (a)
              onChange={(e) => setAge(e.target.value)} // (b)
            />
          </div>

          <button type='submit'>add person</button>
        </form>

        {people.map((person, index) => {
          const { id, firstName, email } = person
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          )
        })}
      </article>
    </>
  )
}

export default ControlledInputs
