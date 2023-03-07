import React, { createContext } from 'react'

import { useState } from 'react'
import NavLinks from './NavLinks'

// (1) in this Context, we are interesting in the "Provider"
export const NavbarContext = createContext()
console.log(NavbarContext)

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

  // (2) use "Provider" here > value={{}} : first {} === back to JS, second {} === object
  // now, when we have those values, we can go directly to UserContainer.jsx and use
  return (
    <NavbarContext.Provider value={{ user, logout, login }}>
      <nav className='navbar'>
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  )
}

export default Navbar
