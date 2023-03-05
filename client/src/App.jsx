/*
  Colors Generator: Logic P2

  (1) SingleColor.jsx

*/

import React, { useRef, useState } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState([])
  const [clipboard, setClipboard] = useState()

  console.log(clipboard)

  const handleSubmit = (e) => {
    e.preventDefault()

    try {
      let colors = new Values('lightpink').all(10)
      setList(colors)
      setError(false)
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
      <section className='colors'>
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
              clipboard={clipboard}
              setClipboard={setClipboard}
            />
          )
        })}
      </section>
    </React.Fragment>
  )
}

export default App
