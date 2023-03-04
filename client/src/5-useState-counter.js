/*
  We want to setup a function: 
  - When we click, it will update after 2s > we want some delay
  - With the function we wrote below:
    + click once > OK 
    + click twice or more > after 2s, just update +1
  
  >> Reason: because setValue() is sync > so when we click 3 times, react still thinks the previous value = 0

  (***) in this lesson, we learn how to pass function into setValue()
*/

import React, { useState } from 'react'

const UseStateCounter = () => {
  const [value, setValue] = useState(0)

  // (1) to solve this problem below, we need to use Functional Approach > next lecture
  const complexIncrease = () => {
    setTimeout(() => {
      setValue(value + 1)
    }, 2000)
  }

  return (
    <>
      <section style={{ margin: '0 4rem' }}>
        <h2>more complex couter</h2>
        <h1>{value}</h1>

        {/* (2) */}
        <button className='btn' onClick={complexIncrease}>
          Increase Later
        </button>
      </section>
    </>
  )
}

export default UseStateCounter
