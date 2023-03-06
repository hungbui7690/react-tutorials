/*
  useState: Basics P2
  - state update triggers re-render

  (***) be careful, we can set any value
    > setCount('pants');

*/

import { useState } from 'react'

const UseStateBasics = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    console.log(count) // log out previous count
    setCount(count + 1)
  }
  return (
    <div>
      <h4>You clicked {count} times</h4>
      <button className='btn' onClick={handleClick}>
        Click me
      </button>
    </div>
  )
}

export default UseStateBasics
