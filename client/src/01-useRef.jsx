/*
  useRef P1: Basics

  - DOES NOT TRIGGER RE-RENDER
  - preserves the value between renders
  - target DOM nodes/elements

*/

import { useEffect, useRef, useState } from 'react'

const UseRefBasics = () => {
  const [value, setValue] = useState(0)
  const refContainer = useRef(null) // (1)

  console.log(refContainer) // {current: null}

  // (3)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(refContainer.current) // get the element
    const name = refContainer.current.value // get the property of that element
    console.log(name)
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            id='name'
            ref={refContainer} // (2)
            className='form-input'
          />
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className='btn'>
        increase
      </button>
    </div>
  )
}

export default UseRefBasics
