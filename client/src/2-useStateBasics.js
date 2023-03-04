/*

*/

import React, { useState } from 'react'

const UseStateBasics = () => {
  // (1) useState(default_value) > default value in this case 'random title'
  const [text, setText] = useState('random title')

  //  (2) use setText() to update state
  const handleClick = () => {
    if (text === 'random title') setText('hello world')
    else setText('random title')
  }

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics
