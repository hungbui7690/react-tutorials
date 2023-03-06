/*
  useEffect: Multiple Returns P2: Fetch Data P1
  
*/

import { useEffect, useState } from 'react'
const url = 'https://api.github.com/users/QuincyLarson' // (***)

const MultipleReturnsFetchData = () => {
  // (1)
  const [user, setUser] = useState(null)

  // (2)
  const fetchUser = async () => {
    try {
      const resp = await fetch(url)
      const user = await resp.json()
      console.log(user)
    } catch (error) {
      // fetch only cares about network errors
      console.log(error)
    }
  }

  useEffect(() => {
    // (3)
    fetchUser()
  }, [])

  return <h2>Fetch Example</h2>
}
export default MultipleReturnsFetchData
