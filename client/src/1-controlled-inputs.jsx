/*
  Form: Multiple Inputs P2
  - we use dynamic object properties in this method
    
  - in handleChange(), we care about these 2: 
    + e.target.name (name attribute of input)
    + e.target.value (value attribute of input)

*/

import React, { useState } from 'react'

const ControlledInputs = () => {
  const [person, setPerson] = useState({
    firstName: '',
    email: '',
    age: '',
  })
  const [people, setPeople] = useState([])

  // (1) (***)
  const handleChange = (e) => {
    // (a)
    const name = e.target.name
    const value = e.target.value

    // (b) here we create new person > use dynamic object properties to add/update properties to person
    setPerson({ ...person, [name]: value })
    console.log(person)
  }

  // (3) submit
  const handleSubmit = (e) => {
    e.preventDefault()

    if (person.firstName && person.email && person.age) {
      // (a) because we use setPerson() to create a new person at onChange > here we just need to add id into that person object
      const newPerson = { ...person, id: new Date().getTime().toString() }
      console.log(newPerson)

      // (b) add newPerson to people array
      setPeople([...people, newPerson])

      // (c) set back to empty string
      setPerson({ firstName: '', email: '', age: '' })
    }
  }

  return (
    <React.Fragment>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange} // (2a) now, all the inputs use the same function to handle changes
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange} // (2b)
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='age'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange} // (2c)
            />
          </div>

          <button type='submit' onClick={handleSubmit}>
            add person
          </button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email, age } = person
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          )
        })}
      </article>
    </React.Fragment>
  )
}

export default ControlledInputs
