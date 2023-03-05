/*
  Form: Basics P2
*/

import React, { useState } from 'react'

const ControlledInputs = () => {
  // (2)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hello world')
  }

  return (
    <article>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='firstName'>Name: </label>
          <input type='text' id='firstName' name='firstName' />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email: </label>
          <input type='text' id='email' name='email' />
        </div>

        {/* (1) use onClick on the button to handle submit */}
        <button type='submit' onClick={handleSubmit}>
          Add Person
        </button>
      </form>
    </article>
  )
}

export default ControlledInputs
