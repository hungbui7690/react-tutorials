/*
  useEffect: Multiple Returns P1: Conditional Rendering
  - check TUTORIAL.md > we have multiple returns in JS 
  - we also have multiple returns in React as well
  
*/

import { useEffect, useState } from 'react'

const MultipleReturnsBasics = () => {
  // use while fetching data
  // convention === boolean values === "isSomething"
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false) // (***) done fetching data
    }, 3000)
  }, [])

  // (***)
  if (isLoading) {
    return <h2>Loading...</h2>
  }

  // (***)
  return <h2>My App</h2>
}
export default MultipleReturnsBasics
