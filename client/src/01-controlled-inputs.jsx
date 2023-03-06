/*
  Form: Controlled Inputs P3

*/

import { useState } from 'react'

const ControlledInputs = () => {
  const [name, setName] = useState('')

  const handleChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    setName(e.target.value) // (***) this will trigger re-render
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
          value={name}
          onChange={handleChange}
        />
      </div>
      <button type='submit' className='btn btn-block'>
        submit
      </button>
    </form>
  )
}

export default ControlledInputs
