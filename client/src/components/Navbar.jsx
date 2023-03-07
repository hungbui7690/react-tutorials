import React, { createContext, useContext } from 'react'

import { useState } from 'react'
import NavLinks from './NavLinks'

export const NavbarContext = createContext()

// (1) custom hook > go to UserContainer.jsx
export const useAppContext = () => {
  return useContext(NavbarContext)
}

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
    <NavbarContext.Provider value={{ user, logout, login }}>
      <nav className='navbar'>
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  )
}

export default Navbar
