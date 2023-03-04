/*
  Now, we can use "Short Circuit" to show/hide item 
  > but now, we are missing Clean-Up
*/

import React, { useState } from 'react'

const ShowHide = () => {
  // (2)
  const [show, setShow] = useState(false)

  // (3)
  return (
    <React.Fragment>
      {/* (b) */}
      <button className='btn' onClick={() => setShow(!show)}>
        Show/Hide
      </button>

      {/* (a) */}
      {show && <Item />}
    </React.Fragment>
  )
}

// (1)
const Item = () => {
  return (
    <div style={{ marginTop: '2rem' }}>
      <h1>window</h1>
      <h2>size: </h2>
    </div>
  )
}

export default ShowHide
