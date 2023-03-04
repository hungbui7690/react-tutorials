import React from 'react'
import Tour from './Tour'

// (2a) destruct
const Tours = ({ tours }) => {
  return (
    <section>
      <div className='title'>
        <h2>our tours</h2>
        <div className='underline'></div>
      </div>

      <div>
        {/* (2b) return single Tour and pass props */}
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour}></Tour>
        })}
      </div>
    </section>
  )
}

export default Tours
