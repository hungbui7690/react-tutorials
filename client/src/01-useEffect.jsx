/*
  useEffect: Cleanup Function P2
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
    // (***) every time we render component > new interval gets created > runs every 1s > after the first click, though we don't click, this function still runs
    const intID = setInterval(() => {
      console.log('hello from interval')
    }, 1000)
  }, [])

  return <h1>hello there</h1>
}

export default CleanupFunction
