/*
  useEffect: React Hooks Rules P2
*/

import { useEffect, useState } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'

const MultipleReturnsFetchData = () => {
  const [condition, setCondition] = useState(false)

  if (condition) {
    return <h3>Example</h3>
  }

  // (***) this will create a bunch of warnings and errors as well in create-react-app > don't place useEffect() after "return JSX" > reason: because this will make useEffect() runs conditionally > if condition is true : return > else : run useEffect()
  useEffect(() => {
    console.log('Hello')
  }, [])

  return <h2>React Hooks Rules</h2>
}

export default MultipleReturnsFetchData
