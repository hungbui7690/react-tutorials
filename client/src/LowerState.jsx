/*
  React.memo()
  - returns memoized component > the component will check whether the props have changed or not > if in this case, List does not change > it just re-render lower state component

  (1) List
*/

import { useState } from 'react'
import { data } from './data'
import List from './List'

const LowerStateChallenge = () => {
  const [people, setPeople] = useState(data)
  const [count, setCount] = useState(0)

  return (
    <section className='container'>
      <button className='btn' onClick={() => setCount(count + 1)}>
        count {count}
      </button>
      <List people={people} />
    </section>
  )
}
export default LowerStateChallenge
