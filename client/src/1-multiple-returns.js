import React, { useState, useEffect } from 'react'

const url = 'https://api.github.com/users/QuincyLarson'

const MultipleReturns = () => {
  // (1)
  const [loading, setLoading] = useState(true)

  // (2)
  if (loading) return <h2>Loading...</h2>

  // (3) this is "multiple returns"
  return <h2>multiple returns</h2>
}

export default MultipleReturns
