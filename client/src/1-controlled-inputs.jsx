/*
  Form: Controlled Inputs P2
  - onChange={(e) => setFirstName(e.target.value)}
    > now we can type 
    > check F12, we will see the state changes

  (***) these inputs are not controlled by itself > but being controlled by the state > that's why we call them "Controlled Inputs"
*/

import React, { useState } from 'react'

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // (2)
    console.log(firstName, email)
  }

  // (1)
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
            onChange={(e) => setFirstName(e.target.value)} // (a)
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email: </label>
          <input
            type='text'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)} // (b)
          />
        </div>

        <button type='submit' onClick={handleSubmit}>
          Add Person
        </button>
      </form>
    </article>
  )
}

export default ControlledInputs
