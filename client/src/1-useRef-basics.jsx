/*
  useRef: Basics P1
  - when we learn about form, we learn about controlled inputs > inputs which are not controlled by themselves 
    > in this tutorial, we will learn another way: useRef()
    > there are many things that we can do with useRef() > but most common is "target DOM nodes/elements"
  
  useRef: 
  + preserves value (similar useState)
  + NOT trigger re-render
  + target DOM nodes/elements 

  (***) in the below example, we don't use controlled inputs > NO "value", "onChange", "state"

/////////////////////////////////////////

  refContainer.current
  refContainer.current.value

*/

import React, { useEffect, useRef } from 'react'

const UseRefBasics = () => {
  const refContainer = useRef(null) // (1) default value = null

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(refContainer.current) // (3a) return that element
    console.log(refContainer.current.value) // (3b) the element that we targets is input > so it has .value property
  }

  console.log(refContainer) // (3c) b4 submission > {current: null}

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div>
        {/* (2) */}
        <input type='text' ref={refContainer} />
        <button type='submit'>submit</button>
      </div>
    </form>
  )
}

export default UseRefBasics
