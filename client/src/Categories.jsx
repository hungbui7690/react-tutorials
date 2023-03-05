import React from 'react'

const Categories = ({ filterItems }) => {
  return (
    <div className='btn-container'>
      {/* (3) we have to create button manually when there are some changes */}
      <button className='filter-btn' onClick={() => filterItems('all')}>
        all
      </button>
      <button className='filter-btn' onClick={() => filterItems('breakfast')}>
        breakfast
      </button>
    </div>
  )
}

export default Categories
