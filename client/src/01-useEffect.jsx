/*
  useEffect: Multiple Returns P2: Fetch Data P2

  Data Fetching :
  - usually three options
    - loading - waiting for data to arrive (display loading state)
    - error - there was an error (display error message)
    - success - received data (display data)
  
  (***) test with 3g + Disable cache > pic: network-tab

*/

import { useEffect, useState } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true) // (***) default of loading is true
  const [isError, setIsError] = useState(false) // (***)
  const [user, setUser] = useState(null)

  const fetchUser = async () => {
    try {
      const resp = await fetch(url)
      const user = await resp.json()
      setUser(user) // success
    } catch (error) {
      setIsError(true) // error
      console.log(error)
    }
    setIsLoading(false) // (***) after successfully fetch data > setLoading to false
  }

  useEffect(() => {
    fetchUser()
  }, [])

  // (***) order matters > we must return the whole JSX for the user at the end of the file > after isLoading & isError
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
