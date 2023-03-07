/* 
  useReducer P5: Actions & Default States

*/

import React, { useReducer } from 'react'
import { data } from './data'

// (1)
const CLEAR_LIST = 'CLEAR_LIST'
const RESET_LIST = 'RESET_LIST'
const REMOVE_ITEM = 'REMOVE_ITEM'

const initialState = {
  people: data,
}

const reducer = (state, action) => {
  // (2b)
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] }
  }

  // (3b) if no action type that is matched
  throw new Error(`No matching "${action.type}" action type`)
}

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const removeItem = (id) => {}

  const clearList = () => {
    // (2a) prevent typos
    dispatch({ type: CLEAR_LIST })
  }

  const reset = () => {
    // (3a)
    dispatch({ type: 'XYZ' })
  }

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
