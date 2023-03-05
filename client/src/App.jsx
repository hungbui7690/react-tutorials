/*
  Lorem: Structure
  - in our project, if we enter negative value > generate only 1 paragraph, and maximum is 8 paragraphs > because in data.js file, we just have only an array of 8 paragraphs

  - States:
    + count: how many paragraphs that we want 
    + text: or paragraphs > array of paragraphs 

  (***) Again: when we add "value" and "onchange" on inputs > they become "controlled inputs"

*/

import React, { useState } from 'react'
import data from './data'

function App() {
  // (1) setup states
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  // (2)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hello world')
  }

  // (3)
  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum? </h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Paragraphs: </label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='btn'>
          Generate
        </button>
      </form>

      {/* dummy data for initial render only */}
      <article className='lorem-text'>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
          aspernatur officiis quidem qui voluptatem? Assumenda nam non tempore
          ipsum ab ratione, ipsam soluta. Enim dolorem, praesentium recusandae
          perferendis provident explicabo!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sit
          dolores laborum nisi natus, ullam commodi saepe eveniet quis atque
          alias animi, voluptates rem expedita hic tenetur officiis amet. Est!
        </p>
      </article>
    </section>
  )
}

export default App
