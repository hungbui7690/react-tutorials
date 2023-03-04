/*
  SECOND PARAMETER aka. Dependency List
  > []: only run once at initial render (when the component is created)
  > [value]: run every time value changes

  (***) we also can have multiple useEffect() run at the same time
*/

import React, { useState, useEffect } from 'react'

const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    console.log('Hello World')
  }, []) // (1) run only once at initial render

  useEffect(() => {
    if (value > 1) document.title = `New Messages(${value})`
  }, [value]) // (2) this won't run at initial render > run only "value" changes

  return (
    <React.Fragment>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Increase
      </button>
    </React.Fragment>
  )
}

export default UseEffectBasics
