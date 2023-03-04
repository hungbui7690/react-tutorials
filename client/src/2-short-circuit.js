/*
  Ternary Operator
  - condition ? true : false

  > Check React Developer Tool > check state
*/

import React, { useState } from 'react'

const ShortCircuit = () => {
  const [text, setText] = useState('')

  // (1)
  const [isError, setIsError] = useState(false)

  return (
    <React.Fragment>
      {/* (2) Toggle Error */}
      <button className='btn' onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>

      {/* (3) Short Circuit & Ternary Operator */}
      {isError && <h2>Error...</h2>}
      {isError ? <p>There is an error...</p> : <p>There is NO error...</p>}
    </React.Fragment>
  )
}

export default ShortCircuit
