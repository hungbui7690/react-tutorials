/*
  - when we get data:
    + setLoading = false 

  > to test > set Network to Fast 3g
*/

import React, { useState, useEffect } from 'react'

const url = 'https://api.github.com/users/QuincyLarson'

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true) // (1)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('default user')

  // (2)
  useEffect(() => {
    // setIsLoading(true) // use this if we set default value = false
    fetch(url)
      .then((response) => response.json())
      .then((user) => {
        const { login } = user
        setUser(login)
        setIsLoading(false) // (***)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  if (isLoading)
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    )

  if (isError)
    return (
      <div>
        <h2>Error...</h2>
      </div>
    )

  return (
    <div>
      <h1>{user}</h1>
    </div>
  )
}

export default MultipleReturns
