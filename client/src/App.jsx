/*
  Context API P2: createContext(), Provider, useContext()

  (0) remove all the props drilling in Navbar.jsx, NavLinks.jsx, UserContainer.jsx
  (1) Navbar.jsx


  - we need the Provider > we need it for the main (parent) component
    > we used to use the Consumer > but now, since we have ContextAPI, we don't need it anymore

  - we can see the the children component need 3 props : user, logout, login > we can use the Provider to pass it to children components 

*/

import React from 'react'
import Navbar from './components/Navbar'

function App() {
  return (
    <React.Fragment>
      <Navbar />
    </React.Fragment>
  )
}

export default App
