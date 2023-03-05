/*
  Colors Generator: Single Color P1

  (1) after colors are generated > setList()
  (2) pass props into SingleColor.jsx
  (3) go to SingleColor and setup

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

    try {
      let colors = new Values(color).all(10)
      console.log(colors[0])

      // (1)
      setList(colors)
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
            className={`${error ? 'error' : null}`}
          />
          <button type='submit' className='btn'>
            Submit
          </button>
        </form>
      </section>

      {/* (2) setup return + pass props to SingleColor > we also pass the index (it has the usage later)  */}
      <section className='colors'>
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} />
        })}
      </section>
    </React.Fragment>
  )
}

export default App
