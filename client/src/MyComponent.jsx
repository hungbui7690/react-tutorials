import React, { useMemo } from 'react'

function MyComponent({ data }) {
  // (***) useMemo()
  const processedData = useMemo(() => {
    return data.map((item) => item.toUpperCase())
  }, [data])

  return (
    <div>
      {processedData.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  )
}

export default MyComponent
