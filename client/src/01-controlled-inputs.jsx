/*
  Form: Controlled Inputs P2
  - setup state values
  - add value and onChange to each input
  - setup onSubmit

  (***) controlled inputs: inputs are not controlled by themselves, but is being controlled by the state

*/

import { useState } from 'react'

const ControlledInputs = () => {
  const [name, setName] = useState('')

  // (3) browser does not update
  const handleChange = (e) => {
    console.log(e.target.name) // (***) the input does not have "name attribute" > empty
    console.log(e.target.value) // value of the input
  }

  return (
    <form className='form'>
      <h4>controlled inputs</h4>
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          name
        </label>
        <input
          type='text'
          className='form-input'
          id='name'
          value={name} // (2a) hook state to this input
          onChange={handleChange} // (2b)
        />
      </div>
      <button type='submit' className='btn btn-block'>
        submit
      </button>
    </form>
  )
}

export default ControlledInputs
