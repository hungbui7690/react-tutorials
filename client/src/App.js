/*
  React Icons 
  - https://react-icons.github.io/react-icons > Search Icon
  - Example: if icon name is FaGithubSquare > FA === Font Awesome > look for Font Awesome in the page and import

  
  (***) we can style the icons like similar text > add colors, increase size...
  
*/

import React from 'react'
import Review from './Review'

// (1)
import { FaGithubSquare } from 'react-icons/fa'

function App() {
  return (
    <>
      <h2>reviews project setup</h2>

      {/* (2) */}
      <FaGithubSquare />
    </>
  )
}

export default App
