/*
  Reviews: UI

*/

import React from 'react'
import Review from './Review'

function App() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>our reviews</h2>
          <div className='underline'></div>
        </div>

        {/* (1) go to Review.js */}
        <Review />
      </section>
    </main>
  )
}

export default App
