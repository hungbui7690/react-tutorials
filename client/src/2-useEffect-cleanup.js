/*
  *** Cleanup
  - after we add event listener in useEffect() > try to resize the browser, then go to Inspector > Element tab > Event Listener > resize
    > we will see may events > if we run this continuously > memory leak > pic: event-listener
    > this is the time we need to use clean up with useEffect

*/

import React, { useState, useEffect } from 'react'

const UseEffectCleanup = () => {
  // (1)
  const [size, setSize] = useState(window.innerWidth)
  // console.log(size)

  // (2)
  const checkSize = () => {
    setSize(window.innerWidth)
  }

  // (3) every time we resize > will call checkSize() > checkSize() will trigger re-render > useEffect() will be called > each time useEffect() is called, eventlistener will be added to window
  useEffect(() => {
    window.addEventListener('resize', checkSize)
  })

  return (
    <React.Fragment>
      <h1>window</h1>
      <h2>{size} px</h2>
    </React.Fragment>
  )
}

export default UseEffectCleanup
