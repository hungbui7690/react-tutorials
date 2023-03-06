/*
  useState: setTimeout Example P2
  
*/

import { useState } from 'react'

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)

  // (***) to fix this > we need to use Functional Approach
  const handleClick = () => {
    setTimeout(() => {
      console.log('clicked the button')
      setValue((prevValue) => {
        return prevValue + 1
      })
    }, 3000)
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
