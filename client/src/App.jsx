/*
  Colors Generator: Initial Setup
  (***) npm i values.js

  - utils.js 
    > convert rgb to hex
  
  - To get the colors, we use external library: values.js

  - Shades: darker colors
  - Tints: Lighter colors

////////////////////////////////////////////////////////

  let colors = new Values(color).all(20) 
    > get the shades và tints with weight=20

*/

import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  // (1)
  const [color, setColor] = useState('orange') // color names can be hex or "name" (i.e: purple, orange)
  const [error, setError] = useState(false) // use when color code is not correct
  const [list, setList] = useState([]) // array of colors when we give the correct color code

  // (2)
  const handleSubmit = (e) => {
    e.preventDefault()

    // (***) test values.js > right now, if color code is wrong/empty > error
    let colors = new Values(color).all(20)
    console.log(colors) // test > correct hex (i.e. #222) > receive array of 20 colors
  }

  // (3)
  return (
    <React.Fragment>
      <section className='container'>
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='#f15025' />
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
