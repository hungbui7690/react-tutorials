/*
  useState: Set Function "Gotcha" 
  - though we have the correct value on browser > when we log it out, we still get the old value
    > later, we will learn how to get the previous value 
*/

import { useState } from 'react'

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)

  const handleClick = () => {
    setValue(value + 1)

    console.log(value) // (***) return previous value > //  so if you have any functionality that relies on the latest value > it will be wrong !!!
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
