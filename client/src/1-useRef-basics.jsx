/*
  useRef: Basics P2

*/

import React, { useEffect, useRef } from 'react'

const UseRefBasics = () => {
  const refContainer = useRef(null)
  const divContainer = useRef(null) // (1) we can create ref to any element > not only input, but any element

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(refContainer.current.value)
    console.log(divContainer.current) //  return <div>hello world</div>
  }

  // (3) one thing that we can use with "ref hook" is "focus our input at the moment our app renders" > because it does NOT trigger RERENDER > so that we can use with useEffect() without worrying about dependency list
  useEffect(() => {
    console.log(refContainer.current)
    refContainer.current.focus() // will focus right after page is loaded
  })

  return (
    <React.Fragment>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' ref={refContainer} />
          <button type='submit'>submit</button>
        </div>
      </form>

      {/* (2) */}
      <div ref={divContainer}>hello world</div>
    </React.Fragment>
  )
}

export default UseRefBasics
