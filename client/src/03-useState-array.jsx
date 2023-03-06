/*
  
#### Initial Render and Re-Renders

  In a React application, the initial render is the first time that the component tree is rendered to the DOM. It happens when the application first loads, or when the root component is first rendered. This is also known as "mounting" the components.

  Re-renders, on the other hand, happen when the component's state or props change, and the component needs to be updated in the DOM to reflect these changes. React uses a virtual DOM to optimize the process of updating the actual DOM, so that only the necessary changes are made.

  There are a few ways that you can trigger a re-render in a React component:

  - By changing the component's state or props. When the component's state or props change, React will re-render the component to reflect these changes.

  - When the parent element re-renders, even if the component's state or props have not changed.

#### General Rules of Hooks

  - starts with "use" (both -react and custom hooks)
  - component must be uppercase
  - invoke inside function/component body
  - don't call hooks conditionally (cover later)
  - set functions don't update state immediately (cover later)

#### useState with Array


*/

import React from 'react'
import { data } from './data'
const UseStateArray = () => {
  // (1)
  const [people, setPeople] = React.useState(data)

  // (2)
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>

            {/* (3) */}
            <button className='remove-btn' onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        )
      })}
      <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={() => setPeople([])} // (4)
      >
        clear items
      </button>
    </div>
  )
}

export default UseStateArray
