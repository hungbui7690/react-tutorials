/*
  - React.useState() > when we write like this, we don't need to import
    > if we use useState() many times, then import > otherwise, use this way

  - we using onClick with parameters > need to use arrow function 
    > if we don't use arrow function > function will be invoked right after component is rendered
*/

import React from 'react'
import { data } from './data' // (***)

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)

  // (1)
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

  return (
    <React.Fragment>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>

            {/* (2) */}
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
    </React.Fragment>
  )
}

export default UseStateArray
