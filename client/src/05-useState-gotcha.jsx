/*
  useState: Functional Update Form
  
  - If you want to update the state immediately and synchronously, you can pass a function to setState that receives the previous state as an argument and returns the new state. 
  - This can be useful if you need to update the state based on the previous state, or if you need to update the state synchronously.
*/

import { useState } from 'react'

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)

  // (***) functional approach
  const handleClick = () => {
    setValue((prevValue) => {
      const newValue = prevValue + 1
      return newValue // (***) must have return > otherwise, undefined
    })
  }

  return (
    <div>
      <h1>{value}</h1>
      <button className='btn' onClick={handleClick}>
        increase
      </button>
    </div>
  )
}

export default UseStateGotcha
