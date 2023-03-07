import React from 'react'

import { useState } from 'react'
import NavLinks from './NavLinks'

const Navbar = () => {
  const [user, setUser] = useState({
    name: 'Joe',
  })

  const logout = () => {
    setUser(null)
  }

  const login = () => {
    setUser({ name: 'something' })
  }

  return (
    <nav className='navbar'>
      <h5>CONTEXT API</h5>
      <NavLinks user={user} logout={logout} login={login} />
    </nav>
  )
}

export default Navbar
