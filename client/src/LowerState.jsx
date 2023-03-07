/*
  Performance P2: Lower State
  - one possible solution is to lower the state

  > move the states to another file > then import and use

*/

import { useState } from 'react'
import { data } from './data'
import List from './List'
import Counter from './Counter' // (2a)

const LowerState = () => {
  const [people, setPeople] = useState(data)

  return (
    <section className='container'>
      {/* (2b) now we can test > then see that it's not re-render anymore */}
      <Counter />
      <List people={people} />
    </section>
  )
}
export default LowerState
