import React, { useMemo } from 'react'

function MyComponent({ data }) {
  // (***)
  const processedData = data.map((item) => item.toUpperCase())

  return (
    <div>
      {/* (2) */}
      {processedData.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  )
}

export default MyComponent
