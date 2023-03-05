/*
  Menu: Buttons (Manual Approach)
    (1) (2) > App.js
    (3)     > Categories.js

*/

import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState([])

  // (1)
  const filterItems = (category) => {
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>

        {/* (2) pass function to Categories */}
        <Categories filterItems={filterItems} />

        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App
