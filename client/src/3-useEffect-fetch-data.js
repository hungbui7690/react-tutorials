/*
  (***) there are no ways for us to convert callback function inside useEffect() into async/await > reason: async/await return promises, but useEffect() cannot return promises because we cannot add async at callback function

*/

import React, { useState, useEffect } from 'react'

// (1)
const url = 'https://api.github.com/users'

// (2)
const UseEffectFetchData = () => {
  // (a)
  const [user, setUser] = useState([])

  // (b)
  const getUsers = async () => {
    const response = await fetch(url)
    const users = await response.json()
    setUser(users) // this line is correct, but the problem here is it will create infinite loop > because every time re-render, useEffect() will be called > and every time setUser() runs > it will trigger re-render, which will call getUser() again >> so that, if we want to write like this, we must add [] as 2nd params in useEffect()

    console.log(users)
  }

  // (3) we ca see that getUser() above is async function > we must setup everything above, then call that function in useEffect() to fetch data for us > normally, after setUser() finishes, we want to load data to UI
  useEffect(() => {
    getUsers()
  }, []) // pmust have [], otherwise it will create inf. loop (in step 2)

  return (
    <>
      <h3>Github Users</h3>
    </>
  )
}

export default UseEffectFetchData
