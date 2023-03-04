/*

 */

import React, { useState, useEffect } from 'react'

const url = 'https://api.github.com/users'

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await fetch(url)
    const users = await response.json()
    setUsers(users)
  }

  useEffect(() => {
    getUsers() // (1) after this line is run, it will trigger setUser(), and then re-render, and load UI for us
  }, [])

  return (
    <>
      <h3>Github Users</h3>
      <ul className='users'>
        {/* (2) here, we use map() to render data into UI  */}
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default UseEffectFetchData
