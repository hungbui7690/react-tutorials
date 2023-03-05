import React from 'react'

// (3a)
const Categories = ({ filterItems }) => {
  return (
    <div className='btn-container'>
      {/* (3b) use function here > hard code */}
      <button className='filter-btn' onClick={() => filterItems('breakfast')}>
        breakfast
      </button>
    </div>
  )
}

export default Categories
