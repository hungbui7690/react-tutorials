/*
  Performance P1: Components Re-render
  - when we click on the button > List will re-render, and People will re-render as well
  - imagine if we have 60 child components > 60 renders for just one small update 
  

  (***) When Component Re-Renders :
  - When the component's state or props change, React will re-render the component to reflect these changes.
  - When the parent element re-renders, even if the component's state or props have not changed.
  - lower state

  (***) side notes: check pic: react-dev-tools just use the production build for production (3rd picture)
    > when we use RDT in development (icon will be in red) > RDT will do some extra checks > app will be slower than in production

  (***) check pics: rdt-profile-settings / record
  
*/

import { useState } from 'react'
import { data } from './data'
import List from './List'

const LowerState = () => {
  const [people, setPeople] = useState(data)
  const [count, setCount] = useState(0)

  return (
    <section className='container'>
      <button
        className='btn'
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button>
      <List people={people} />
    </section>
  )
}
export default LowerState
