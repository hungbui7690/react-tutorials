/*
  useEffect: Fetch Errors "Gotcha"

  - Unlike for example Axios, by default, the fetch() API does not consider HTTP status codes in the 4xx or 5xx range to be errors. Instead, it considers these status codes to be indicative of a successful request


  > https://[x]api.github.com/users/QuincyLarson > this will create error

  > https://api.github.com/users/QuincyLarson[x] > this is a successful request though URL is not correct > reason: because fetch() does not consider 404 as error
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
