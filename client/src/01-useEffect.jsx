/*
  useEffect: React Hooks Rules P1
*/

import { useEffect, useState } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'

const MultipleReturnsFetchData = () => {
  const [condition, setCondition] = useState(true)

  // (***) error
  if (condition) {
    const [state, setState] = useState(false)
  }

  return <h2>React Hooks Rules</h2>
}

export default MultipleReturnsFetchData
