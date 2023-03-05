/*
  Colors Generator: Structure
  - use value & onChange > controlled input

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

    let colors = new Values(color).all(10)
    console.log(colors)
  }

  // (***)
  return (
    <React.Fragment>
      <section className='container'>
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='#f15025'
            value={color} // (a) hook input to state
            onChange={(e) => setColor(e.target.value)} // (b) hook input to state
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
