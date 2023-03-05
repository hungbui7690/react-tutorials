import React, { useState } from 'react'
import Categories from './Categories'
import Menu from './Menu'

// (1)
import items from './data'

function App() {
  // (2) load data into state
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState([])

  // (3)
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>

        {/* (4) */}
        <Categories />
        <Menu />
      </section>
    </main>
  )
}

export default App
