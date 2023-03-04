/*
  Tours Project
  - Setup Loading
*/

import React, { useState, useEffect } from 'react'

// (1)
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  // (2a)
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([]) // (***) empty array

  // (2b)
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  // (2c)
  return (
    <main>
      <Tours />
    </main>
  )
}

export default App
