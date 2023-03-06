/*
  useEffect: Cleanup Function P3
  - this is an example with cleanup function when we work with timer
*/

import { useEffect, useState } from 'react'

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false)

  console.log('> render') // (***)

  return (
    <div>
      <button className='btn' onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  )
}
const RandomComponent = () => {
  useEffect(() => {
    const intID = setInterval(() => {
      console.log('hello from interval')
    }, 1000)

    // (***) we setup this since we want to clear the interval above after we hide the element > after we clear, the interval is not running anymore
    return () => {
      clearInterval(intID)
      console.log('*** Cleanup')
    }
  }, [])

  return <h1>hello there</h1>
}

export default CleanupFunction
