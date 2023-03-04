import React, { useState } from 'react'

const UseStateCounter = () => {
  const [value, setValue] = useState(0)

  // (2)
  const reset = () => {
    setValue(0)
  }

  return (
    <>
      <section style={{ margin: '0 4rem' }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={() => setValue(value - 1)}>
          Decrease
        </button>

        {/* (1) */}
        <button className='btn' onClick={reset}>
          {' '}
          Reset
        </button>

        <button className='btn' onClick={() => setValue(value + 1)}>
          Increase
        </button>
      </section>
    </>
  )
}

export default UseStateCounter
