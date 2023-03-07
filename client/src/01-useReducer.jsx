/*
  useReducer P2: Solution
  -
*/

import React from 'react'
import { data } from './data'

const ReducerBasics = () => {
  const [people, setPeople] = React.useState(data)

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

  const clearList = () => {
    setPeople([])
  }

  // (1)
  const reset = () => {
    setPeople(data)
  }

  return (
    <div className='container'>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}

      {/* (2) */}
      {people.length === 0 ? (
        <button className='btn' style={{ marginTop: '2rem' }} onClick={reset}>
          reset
        </button>
      ) : (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={clearList}
        >
          clear
        </button>
      )}
    </div>
  )
}

export default ReducerBasics
