import React, { useState } from 'react'

const UseStateCounter = () => {
  const [value, setValue] = useState(0)

  // (***) in setValue(), we pass function instead of passing "value+1" like previous lecture
  // name convention = prevState or prev or oldState
  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1
      })
    }, 2000)
  }

  return (
    <>
      <section style={{ margin: '0 4rem' }}>
        <h2>more complex couter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={complexIncrease}>
          Increase Later
        </button>
      </section>
    </>
  )
}

export default UseStateCounter
