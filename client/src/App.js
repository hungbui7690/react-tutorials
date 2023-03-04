/*
  Solution

*/

import React, { useState } from 'react'
import data from './data'
import List from './List'

function App() {
  // (1) load data
  const [people, setPeople] = useState(data)

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>

        {/* (2) pass props to List > (***) we don't iterate and loop here, but loop in the child component */}
        <List people={people} />

        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  )
}

export default App
