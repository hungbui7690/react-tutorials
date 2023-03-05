/*
  Form: Multiple Inputs P2
  
  (1) create state as object
  (2) at the "value" att > instead of using firstName, we use person.firstName
  (3) remove handleSubmit() (we will write this again, but in another way later) > onChange of inputs are changed to handleChange() > remove onSubmit at form, and use onClick at button

  (***) when we use this method, "name" att of the inputs is so important > it must be exact to state
  name='firstName' 
  value={person.firstName}

*/

import React, { useState } from 'react'

const ControlledInputs = () => {
  // (***) we don't use this anymore
  const [firstName, setFirstName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')

  // (1) create new state as object
  const [person, setPerson] = useState({
    firstName: '',
    email: '',
    age: '',
  })
  const [people, setPeople] = useState([])

  // (3)
  const handleChange = (e) => {}

  const handleSubmit = (e) => {
    e.preventDefault()
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
              name='firstName' // (***) name must match exactly to the state
              value={person.firstName} // (2a)
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email' // (***)
              value={person.email} // (2b)
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='age'
              id='age'
              name='age' // (***)
              value={person.age} // (2c)
              onChange={handleChange}
            />
          </div>

          <button type='submit' onClick={handleSubmit}>
            add person
          </button>
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
