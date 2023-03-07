/*
  useReducer P3: Setup
  - with useState, when we call setState() > it will update the state for us right away 
  - with useReducer, it is totally different 
    > we need to pass (dispatch) the action type to reducer > then reducer will handle and return the state for us 



  (1) remove all codes inside each function > remove functionalities

*/

import React, { useReducer } from 'react'
import { data } from './data'

// (1)
const initialState = {
  people: data,
}

// (2)
const reducer = (state, action) => {}

const ReducerBasics = () => {
  // (3)
  const [state, dispatch] = useReducer(reducer, initialState)

  const removeItem = (id) => {}

  const clearList = () => {}

  const reset = () => {}

  // (4) instead of "people" > now we use "state.people"
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
