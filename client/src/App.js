/*
  Catching Error
  - if there is some error, we still setLoading = false, but log the error out or setError = true

  > after finished, go to RDT (React Dev Tool) to test the state
    > state:
      - from [] to ([{…},  {…}, {…}, {…}, {…}])
      - from true to false
      > pic: test
*/

import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const fetchTours = async () => {
    // (a) loading...
    setLoading(true)

    try {
      // (a)
      const response = await fetch(url)
      const tours = await response.json()

      // (b) if the code run to this line, which means there is no error > so that we setLoading = false
      setLoading(false)

      // (c)
      setTours(tours)
    } catch (error) {
      // (***) catching error > normally, we will setError = true here if we have the error state
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

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
