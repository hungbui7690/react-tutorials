/*
  Menu:
  - in the last lecture, we use manual approach to create buttons > but there are 2 issues with this method: 

    + 1) there is no "all" button to list out all items
    + 2) we cannot sync with our data > every time we have update in data, we need to add or update buttons
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
    // (a) if button === "all" > use original data
    if (category === 'all') {
      setMenuItems(items)
      return
    }

    // (b) if button !== "all", filter items
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

        {/* (2) */}
        <Categories filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App
