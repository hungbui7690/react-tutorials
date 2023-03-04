import React, { useState } from 'react'
import { data } from './data' // (***)

const UseStateArray = () => {
  // (1) load data from local file
  const [people, setPeople] = useState(data)

  /* (***) from previous lecture
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id != id)
    setPeople(newPeople)
  }
  */

  const removeItem = (id) => {
    // (***) functional approach: we can use anytime we want when using setState() > just remember that when use functional approach > need to have "return" keyword
    setPeople((prevPeople) => {
      let newPeople = prevPeople.filter((person) => person.id !== id)
      return newPeople
    })
  }

  return (
    <React.Fragment>
      {people.map((person) => {
        const { id, name } = person

        return (
          <div key={id} className='item'>
            <h4>{name}</h4>

            {/* (***) */}
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
      <button className='btn' onClick={() => setPeople([])}>
        Clear Items
      </button>
    </React.Fragment>
  )
}

export default UseStateArray
