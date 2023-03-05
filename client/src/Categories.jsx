import React from 'react'

// (5a)
const Categories = ({ filterItems, categories }) => {
  return (
    <div className='btn-container'>
      {/* (5b) based on categories array >> we use map() to create button */}
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className='filter-btn'
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
