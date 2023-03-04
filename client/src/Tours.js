import React from 'react'
import Tour from './Tour'

// (2a) destructure remove()
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className='title'>
        <h2>our tours</h2>
        <div className='underline'></div>
      </div>

      {/* (2b) pass remove() to Tour.js */}
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
        })}
      </div>
    </section>
  )
}

export default Tours
