/*
  (1) we can see that we don't set state directly like when we work with useState() > but we need to go to multiple steps 
    > at handleSubmit(), we need to use dispatch() with type = TESTING 
    > then in reducer(), we will catch it and handle

*/

import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../data'

const reducer = (state, action) => {
  // (1)
  if (action.type === 'TESTING') {
    console.log(state) // (2) when we click "Add" the first time, it show empty values > click the 2nd time, it will show the correct states that we set at "return" > if we click again, we can access to "LAST STATE VALUES"

    return {
      ...state,
      people: data,
      isModalOpen: true,
      modalContent: 'item added',
    } // destructure, and decide which value we want to change
  }

  // throw new Error('No matching Action Type') // (4) throw ra error if the type is not correct
}

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
}

const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name) {
      dispatch({ type: 'TESTING' })
    } else {
      // (3) sending the type that we did not handle in reducer()
      dispatch({ type: 'RANDOM' })
    }
  }

  return (
    <React.Fragment>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit'>add</button>
      </form>

      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        )
      })}
    </React.Fragment>
  )
}

export default Index
