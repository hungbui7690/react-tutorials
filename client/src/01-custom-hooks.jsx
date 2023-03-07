/*
  Custom Hooks P2: Create & Use Custom Hook
  - create useToggle.jsx
  - import and use

*/

import { useState } from 'react'
import useToggle from './useToggle' // (***)

const ToggleExample = () => {
  const { show, toggle } = useToggle(true) // (***)

  return (
    <div>
      <h4>Toggle Custom Hook</h4>

      {/* (***) */}
      <button className='btn' onClick={() => toggle(!show)}>
        Toggle
      </button>
      {show && <h4>Some Stuffs</h4>}
    </div>
  )
}

export default ToggleExample
