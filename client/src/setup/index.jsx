/*
  (1) remove state people and setModal

  - when we call useState() > we receive 1 state + 1 function: 
    > const [name, setName] = useState('') 
      > sẽ get đc name (state) và setName() 

  - when we call useReducer() > we also receive a state and a function: 
    > state & dispatch()

  (2) create reducer
  (3) create default state
  (4) useReducer(reducer, defaultState)
  (5) use state.isModalOpen with conditional rendering 
  (6) add state.people
 */

import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../data'

// (2)
const reducer = (state, action) => {}

// (3) initial state for useReducer > we will put all global states in this object > "name" is only used locally, so that we use useState()
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: 'hello world',
}

const Index = () => {
  // (1) remove people and Modal states from useState() > we will put it in defaultState object
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState) // (4) use useReducer()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name) {
    } else {
    }
  }

  return (
    <React.Fragment>
      {/* (5) use state.isModalOpen */}
      {state.isModalOpen && <Modal />}
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

      {/* (6) use state.people */}
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
