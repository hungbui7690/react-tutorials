/*
  - now, we want to trigger useEffect() when value > 0

  - error if we write this way 
      if (value > 0) {
        useEffect(() => {
          console.log('call useEffect')
          document.title = `New Messages(${value})`
        })
      }
    > we learned that we can not use conditional function with hooks > this is an example

  > to fix, we will setup if/else inside useEffect() (below)

*/
import React, { useState, useEffect } from 'react'

const UseEffectBasics = () => {
  // (1)
  const [value, setValue] = useState(0)

  // (3)
  useEffect(() => {
    console.log('call useEffect')

    // (***) we must write if / else inside of useEffect()
    if (value > 1) document.title = `New Messages(${value})`
  })

  console.log('render component')

  return (
    <React.Fragment>
      <h1>{value}</h1>

      {/* (2) */}
      <button className='btn' onClick={() => setValue(value + 1)}>
        Increase
      </button>
    </React.Fragment>
  )
}

export default UseEffectBasics
