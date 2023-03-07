/* 
  useReducer P7: Import / Export
  - spread into multiple files 


  (1)
  - create new file - actions.js
    - copy/paste all actions
    - export/import actions

  (2)
  - create new file - reducer.js
    - copy/paste reducer
    - import actions
    - import data
    - export/import reducer

  (***) remember to have data file & actions in reducer as well

*/

import React, { useReducer } from 'react'
import { data } from './data'

// (1b)
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './action'

// (2b)
import { reducer } from './reducer'

const initialState = {
  people: data,
}

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } })
  }

  const clearList = () => {
    dispatch({ type: CLEAR_LIST })
  }

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
