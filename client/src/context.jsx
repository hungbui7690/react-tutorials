import React, { useState, createContext, useContext } from 'react'

export const GlobalContext = createContext()

// (1)
const AppContext = (props) => {
  const [user, setUser] = useState({
    name: 'Joe',
  })

  const logout = () => {
    setUser(null)
  }

  const login = () => {
    setUser({ name: 'something' })
  }

  // (***)
  return (
    <GlobalContext.Provider value={{ user, setUser, logout, login }}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(GlobalContext)
}

// (2) go to main.jsx
export default AppContext
