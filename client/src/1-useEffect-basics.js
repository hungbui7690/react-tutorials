/*
  When we click the button, we call setValue()
  
  > setValue() does 2 things: 
    + (1) it preserved the value between the renders
    + (2) it triggered the render 

  > Because (2) triggers re-render > useEffect() will be called automatically

*/
import React, { useState, useEffect } from 'react'

const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  // (2) side effect: change document title
  useEffect(() => {
    console.log('call useEffect')

    // (***)
    document.title = `New Messages(${value})`
  })

  console.log('render component')

  return (
    <React.Fragment>
      <h1>{value}</h1>

      {/* (1) */}
      <button className='btn' onClick={() => setValue(value + 1)}>
        Increase
      </button>
    </React.Fragment>
  )
}

export default UseEffectBasics
