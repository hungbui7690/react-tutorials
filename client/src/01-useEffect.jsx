/*
  useEffect: Fetch Errors "Gotcha" P2
  - we can check for 404 error manually when working with fetch()
*/

import { useEffect, useState } from 'react'
const url = 'https://api.github.com/users/QuincyLarsonx'

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState(null)

  const fetchUser = async () => {
    try {
      const resp = await fetch(url)

      // (***)
      if (!resp.ok) {
        setIsError(true)
        setIsLoading(false)
      }

      const user = await resp.json()
      setUser(user)
    } catch (error) {
      setIsError(true)
      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>There was an error...</h2>
  }

  return (
    <div>
      <img
        style={{ width: '150px', borderRadius: '25px' }}
        src={user.avatar_url}
        alt={user.name}
      />
      <h2>{user.name}</h2>
      <h4>works at {user.company}</h4>
      <p>{user.bio}</p>
    </div>
  )
}
export default MultipleReturnsFetchData
