/*
  useRef: Navbar: Data
  
  - The problem with our app is we hard code the links below (home/about/contact/products) > when app gets bigger, it is hard to update
    > for example, it we add sidebar, footer > and in those sections have links that are exactly like navbar > every time we make some update in url or link > we need to change in 3 places
  
  - with big project > we should have data in 1 place > and every time we want to update, we just need to change in 1 place > in this project, it is data.jsx

  (1) Navbar.js
*/

import React from 'react'
import Navbar from './Navbar'

// (3a)
import Sidebar from './Sidebar'

function App() {
  return (
    <>
      <Navbar />
      <br /> <br /> <hr />
      {/* (3b) */}
      <Sidebar />
    </>
  )
}

export default App
