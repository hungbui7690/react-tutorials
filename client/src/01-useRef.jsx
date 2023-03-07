/*
  useRef P3: isMount

  - DOES NOT TRIGGER RE-RENDER
  - preserves the value between renders
  - target DOM nodes/elements

*/

import { useEffect, useRef, useState } from 'react'

const UseRefBasics = () => {
  const [value, setValue] = useState(0)
  const refContainer = useRef(null)
  const isMounted = useRef(false) // (***)

  const handleSubmit = (e) => {
    e.preventDefault()
    setValue(value + 1) // (***)
  }

  // (***) does not run from initial render > but run from the seconds re-render and after that
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true
      return
    }
    console.log('re-render')
  }, [value])

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
            ref={refContainer} // ()
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
