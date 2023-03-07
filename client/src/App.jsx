/*
  Context API P1: Without Context API

  (1) create three components and nest them in such way :
      - Navbar.jsx
      - NavLinks.jsx (nested in Navbar)
        - UserContainer.jsx (nested in NavLinks)

  (2)
      - import Navbar.jsx in 01-context-api.jsx (remove container - CSS)
      - in Navbar.jsx setup
        - user state value
          - default value {name:'something'}
        - logout function
          - set user back to null
      - pass 2 of them down to UserContainer.jsx

  (3)
      - display user and button
      - on button click set user back to null

  (4) extra challenge
      - login functionality 
      - if user null, in UserContainer display <p>please login</p> & login button

  (***) to create this one, we have to use Prop Drilling many times 
    > next lecture, will solve this using Context API

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
