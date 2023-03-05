/*
  - JS
    const input = document.getElementById('myText');
    const inputValue = input.value
  
  - React: to get the value, it is different than JS > we need to hook up inputs to a state value 
    > use "value", "onChange"

////////////////////////////////////////////////////////


  - htmlFor at label will link with id
  - inputs need 2 things:
    + id to link with label
    + name 

  - form: there are 2 ways to submit: 
    + button > onClick 
    + form > onSubmit
*/

import React from 'react'

const ControlledInputs = () => {
  // (1)
  const handleSubmit = (e) => {
    e.preventDefault() // (***) similar to JS, we must have this line > otherwise, page will be refreshed
    console.log('hello world')
  }

  return (
    <article>
      {/* (2) use onSubmit */}
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='firstName'>Name: </label>
          <input type='text' id='firstName' name='firstName' />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email: </label>
          <input type='text' id='email' name='email' />
        </div>
        <button type='submit'>Add Person</button>
      </form>
    </article>
  )
}

export default ControlledInputs
