/*
  useCallback Hook P2: Common Use Case

*/

import { useState, useEffect, useCallback } from 'react'
const url = 'https://api.github.com/users'

const FetchData = () => {
  const [users, setUsers] = useState([])

  // (***)
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url)
      const users = await response.json()
      setUsers(users)
    } catch (error) {
      console.log(error)
    }
  }, [])

  // (***) when working with create-react-app > it usually shows warning in vscode asking to add fetchData to dep list in useEffect() > we need to use useCallback() above with empty dep list + add fetchData to useEffect() dep list
  useEffect(() => {
    fetchData()
  }, [fetchData])
  return (
    <section>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
export default FetchData
