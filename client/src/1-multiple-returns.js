/*
  - naming convention: use isLoading, isError 
    > no error, no loading > load users
*/

import React, { useState, useEffect } from 'react'

const url = 'https://api.github.com/users/QuincyLarson'

const MultipleReturns = () => {
  // (1)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('default user')

  // (2)
  if (isLoading)
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    )

  // (3)
  if (isError)
    return (
      <div>
        <h2>Error...</h2>
      </div>
    )

  // (4)
  return (
    <div>
      <h1>{user}</h1>
    </div>
  )
}

export default MultipleReturns
