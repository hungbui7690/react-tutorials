import React, { useState } from 'react'

const UseStateCounter = () => {
  // (1)
  const [value, setValue] = useState(0)

  // (2)
  return (
    <>
      <section style={{ margin: '0 4rem' }}>
        <h2>regular counter</h2>

        {/* (a) */}
        <h1>{value}</h1>

        {/* (b) */}
        <button className='btn' onClick={() => setValue(value - 1)}>
          Decrease
        </button>

        {/* (c) */}
        <button className='btn' onClick={() => setValue(value + 1)}>
          Increase
        </button>
      </section>
    </>
  )
}

export default UseStateCounter
