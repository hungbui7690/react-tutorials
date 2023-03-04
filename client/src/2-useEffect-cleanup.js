/*
  *** Cleanup
  > add return () => {}

  - cleanup function > when the the logs (the first lines)
      render >> useEffect 
      render >> cleanup >>> use Effect
      render >> cleanup >>> use Effect
      ...
    > after initial render, every time useEffect() is called, it will also trigger cleanup 

  - we can also add [] as 2nd param of useEffect(), so that event listener can only run once
    > try to comment return () => {} + add [] > functionality will work as usual

  (***) Notes: clean up is super important, remember this so that when we work with conditional rendering (work with appeared/disappeared components)

*/

import React, { useState, useEffect } from 'react'

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    console.log('useEffect')
    window.addEventListener('resize', checkSize)

    // (***) đây là remove event listener
    return () => {
      console.log('cleanup')
      window.removeEventListener('resize', checkSize)
    }
  })

  console.log('render')

  return (
    <React.Fragment>
      <h1>window</h1>
      <h2>{size} px</h2>
    </React.Fragment>
  )
}

export default UseEffectCleanup
