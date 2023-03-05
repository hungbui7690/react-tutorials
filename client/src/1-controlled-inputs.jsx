/*
  Form: Controlled Inputs P1
  - in this lesson, we learn how to hook inputs to state values
    > we must add 2 attributes into inputs: 
      + value: ref the state value
      + onChange: event listener will fire cb function each and every-time we type something in the input


  (***) if we add "value" att but without "onChange" > Warning > and we can NOT type 
        > reason: because we set: const [firstName, setFirstName] = useState('') > inputs have value of '' and cannot be changed
*/

import React, { useState } from 'react'

const ControlledInputs = () => {
  // (1)
  const [firstName, setFirstName] = useState('abc')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hello world')
  }

  // (2) add value attribute
  return (
    <article>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='firstName'>Name: </label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={firstName} // (a)
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email: </label>
          <input
            type='text'
            id='email'
            name='email'
            value={email} // (b)
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
