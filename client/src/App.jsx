/*
  Lorem: Complete P1
*/

import React, { useState } from 'react'
import data from './data'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  // (1)
  const handleSubmit = (e) => {
    e.preventDefault()
    setText(data) // use all data
  }

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

      {/* (2) */}
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  )
}

export default App
