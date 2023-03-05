/*
  Menu: Buttons (Dynamic Approach)
*/

import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

// (1) get all unique categories >> new Set returns object: {'breakfast', 'lunch', 'shakes'} > we have to use spread operator to convert it into array
const allCategories = ['all', ...new Set(items.map((item) => item.category))]
console.log(allCategories)

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories) // (2) use here

  // (3)
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }

    // (***) this must be items.filter(), not menuItems.filter() like the prev lessons (we don't use state, but use the original data)
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

        {/* (4) */}
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App
