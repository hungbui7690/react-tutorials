/*

*/

import React, { useState } from 'react'

const ErrorExample = () => {
  let title = 'random title'

  const value = useState(1)[0] // set the first item in useState() = 1 and save in "value"
  const handler = useState(1)[1] // save the second item in useState() to handler
  console.log(value, handler) // [1, f]

  const handleClick = () => {
    title = 'Hello'
    console.log(title)
  }

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  )
}

export default ErrorExample
