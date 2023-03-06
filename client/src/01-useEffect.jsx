/*
  useEffect: Cleanup Function P4
  - this is an example with cleanup function when we work with event listener

  
  (***) You Might Not Need an Effect: https://beta.reactjs.org/learn/you-might-not-need-an-effect      
    - will still utilize useEffect
    - there is still plenty of code using useEffect

    If we want to reduce of useEffect(): 
    - fetching data > replaced by libraries - react query, rtk query, swr or next.js
    

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
    const someFunc = () => {
      // some logic here
    }

    window.addEventListener('scroll', someFunc)

    // (***) without this line > when we check EventListeners (Elements tab) > there is many Events there > pic: cleanup-event: refresh
    // return () => window.removeEventListener('scroll', someFunc)
  }, [])

  return <h1>hello there</h1>
}

export default CleanupFunction
