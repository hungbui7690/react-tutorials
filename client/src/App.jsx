/*
  Tabs: Fetch Jobs

*/

import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'

function App() {
  // (1)
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [index, setIndex] = useState(0)

  // (2)
  const fetchJobs = async () => {
    // (a)
    const response = await fetch(url)
    const newJobs = await response.json()
    console.log(newJobs)

    // (b) if code is at this point > no error > we should setLoading = false first
    setLoading(false)
    setJobs(newJobs)
  }

  // (3) use useFetch() to call the function to initial data + re-render
  useEffect(() => {
    fetchJobs()
  }, [])

  // (4)
  if (loading) {
    return (
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    )
  }

  return <h2>tabs project setup</h2>
}

export default App
