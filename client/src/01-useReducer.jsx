/* 
  useReducer P6: Reset List & Remove Person

*/

import React, { useReducer } from 'react'
import { data } from './data'

const CLEAR_LIST = 'CLEAR_LIST'
const RESET_LIST = 'RESET_LIST'
const REMOVE_ITEM = 'REMOVE_ITEM'

const initialState = {
  people: data,
}

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] }
  }

  // (1b)
  if (action.type === RESET_LIST) {
    return { ...state, people: data }
  }

  // (2b)
  if (action.type === REMOVE_ITEM) {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    )
    console.log(newPeople)
    return { ...state, people: newPeople }
  }

  throw new Error(`No matching "${action.type}" action type`)
}

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // (2a) since we have to pass the id to reducer() > using payload (naming convention)
  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } })
  }

  const clearList = () => {
    dispatch({ type: CLEAR_LIST })
  }

  // (1a)
  const reset = () => {
    dispatch({ type: RESET_LIST })
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
