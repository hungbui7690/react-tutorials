/*
  - Fetching Tours
*/

import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  // (1) create function to fetch data
  const fetchTours = async () => {
    // (***)
    setLoading(true)

    const response = await fetch(url)
    const tours = await response.json()
    console.log(tours)
  }

  // (2) use useEffect() to call function to fetch data
  useEffect(() => {
    fetchTours()
  }, []) // (***)

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  return (
    <main>
      <Tours />
    </main>
  )
}

export default App
