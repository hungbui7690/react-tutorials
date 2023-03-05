/*
  Colors Generator: Values & Error

*/

import React, { useState } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    // (1) put the try/catch to prevent app from crashing when the color code is not correct/empty
    try {
      let colors = new Values(color).all(10)
      console.log(colors) // (***) actually, we have 21 items in this array > original color + 10 tins + 10 shades
    } catch (error) {
      console.log(error)
      setError(true)
    }
  }

  return (
    <React.Fragment>
      <section className='container'>
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='#f15025'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? 'error' : null}`} // (2)
          />
          <button type='submit' className='btn'>
            Submit
          </button>
        </form>
      </section>
      <section className='colors'>
        <h4>List goes here</h4>
      </section>
    </React.Fragment>
  )
}

export default App
