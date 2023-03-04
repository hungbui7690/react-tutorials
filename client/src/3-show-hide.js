/*
  - we have Memory Leak

  > without [] in dep list
    - open app 
    - choose Element tab, Styles sub-tab
    - click Show/Hide
    - Resize 
    - choose Event Listeners sub-tab

  > with [] in dep list: 
    - do the same but click show/hide, then resize
    - after that, open Event Listeners sub-tab
    > we can see that though we have [], it it still create event every time we click on show/hide and resize
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
  // (1)
  const [size, setSize] = useState(window.innerWidth)

  // (2)
  const checkSize = () => {
    setSize(window.innerWidth)
  }

  // (3) checkSize runs continuously when size is changing
  useEffect(() => {
    console.log('abc')
    window.addEventListener('resize', checkSize)
  }, []) // (***) there's no dep list

  return (
    <div style={{ marginTop: '2rem' }}>
      <h1>window</h1>
      <h2>size: {size}</h2>
    </div>
  )
}

export default ShowHide
