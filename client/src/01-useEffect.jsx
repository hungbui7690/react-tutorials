/*
  useEffect: Cleanup Function P1
*/

import { useEffect, useState } from 'react'

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false)

  // (***) setToggle() > mount and unmount > during mounting phase, useEffect() will be called
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
  // (***) though we set useEffect() to run once at initial render > it still runs many times as we click the button
  useEffect(() => {
    console.log('hmm, this is interesting')
  }, [])

  return <h1>hello there</h1>
}

export default CleanupFunction
