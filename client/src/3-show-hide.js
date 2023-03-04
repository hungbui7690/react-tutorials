/*
  - After this lesson, we finished useEffect, so that we can start on some mini Projects: 
    + Tours
    + Reviews 
    + Accordion
    + Menu
    + Tabs
    + Sliders
*/

import React, { useState, useEffect } from 'react'

const ShowHide = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <button className='btn' onClick={() => setShow(!show)}>
        Show/Hide
      </button>
      {show && <Item />}
    </>
  )
}

const Item = () => {
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    console.log('abc')
    window.addEventListener('resize', checkSize)

    // (***) add clean-up function in useEffect > we don't need [] in dep list anymore
    return () => {
      window.removeEventListener('resize', checkSize)
    }
  }) // (***) we don't need [] here anymore

  return (
    <div style={{ marginTop: '2rem' }}>
      <h1>window</h1>
      <h2>size: {size}</h2>
    </div>
  )
}

export default ShowHide
