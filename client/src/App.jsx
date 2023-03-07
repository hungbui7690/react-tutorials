/*
  Context API P4: Global Setup
  - we want to provide all the values to the entire app (not just Navbar and its children like this)

    (0) remove all context in the last lessons
  
    (1)
    - in src create context.jsx

    (2)
    - setup a global context - GlobalContext
    - setup a component (AppContext) with one state value
    - return GlobalContext.Provider from AppContext

    (3)
    - wrap then entire application (main.jsx) - children prop "gotcha"
    - setup a custom hook

    (4)
    - access in App.jsx
    - log result

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
