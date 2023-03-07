/*
  Custom Hooks P1: Setup
  - same rules as regular hooks
  - simplify component (less code)
  - re-use functionality

  (***) requirement: setShow() is used in many places > turn in to Custom Hook

*/

import { useState } from 'react'

const ToggleExample = () => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <h4>Toggle Custom Hook</h4>
      <button className='btn' onClick={() => setShow(!show)}>
        Toggle
      </button>
      {show && <h4>Some Stuffs</h4>}
    </div>
  )
}

export default ToggleExample
