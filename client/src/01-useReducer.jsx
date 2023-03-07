/* 
  useReducer P4: Basics
  
*/

import React, { useReducer } from 'react'
import { data } from './data'

const initialState = {
  people: data,
}

// (2) state, action params
const reducer = (state, action) => {
  // (***)
  if (action.type === 'CLEAR_LIST') {
    return { ...state, people: [] }
  }
}

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const removeItem = (id) => {}

  const clearList = () => {
    // (1) convention: UPPER SNAKE CASE
    dispatch({ type: 'CLEAR_LIST' })
  }

  const reset = () => {}

  return (
    <div className='container'>
      {state.people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}

      {state.people.length === 0 ? (
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
