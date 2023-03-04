/*
  Short-Circuit Evaluation & Ternary Operator

  - in React, we must return JSX, so that we cannot use if/else 
  - because in {} must be expression, but in if/else won't return value 
    > we must rely on short-circuit & ternary operator heavily to display something conditionally

*/

import React, { useState } from 'react'

const ShortCircuit = () => {
  const [text, setText] = useState('')

  // (1)
  const firstValue = text || 'hello world' // return 1st truthy value
  const secondValue = text && 'hello world' // return last value if everything is truthy

  // (2)
  return (
    <React.Fragment>
      <h1>1st value: {firstValue}</h1>
      <h1>2nd value: {secondValue} </h1>
      <h2>{text || 'john doe'}</h2>
      {!text && <h2>hello world</h2>}
    </React.Fragment>
  )
}

export default ShortCircuit
