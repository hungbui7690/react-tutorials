/*
  Form: Controlled Inputs P4

*/

import { useState } from 'react'

const ControlledInputs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('') // (***) multiple inputs

  // (***) email must be valid to submit since we use input with type=email > (browser sometimes does not show the form validation)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email) // (***)
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h4>controlled inputs</h4>
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          name
        </label>
        <input
          type='text'
          className='form-input'
          id='name'
          value={name} // (1a) link to "name" state
          onChange={(e) => setName(e.target.value)} // (1b)
        />
      </div>
      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          email
        </label>
        <input
          type='email'
          className='form-input'
          id='email'
          value={email} // (2a) links to "email" state
          onChange={(e) => setEmail(e.target.value)} // (2b)
        />
      </div>
      <button type='submit' className='btn btn-block'>
        submit
      </button>
    </form>
  )
}

export default ControlledInputs
