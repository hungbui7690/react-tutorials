/*
  (1) set default state trở lại như cũ > original state
  (2) dispatch() > send, must have "type" (convention of "value" of type is UPPERCASE)
      > sau đó ở reducer() sẽ handle 
  
  (3) at reducer(), we MUST return some kind of state > otherwise, error

 */

import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../data'

// (3)
const reducer = (state, action) => {
  console.log(state, action) // {people: Array(0), isModalOpen: false, modalContent: ''} {type: 'TESTING'}

  return state // (***) must "return" some states > otherwise, error
}

// (1) change back to default > [], false, ''
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
      dispatch({ type: 'TESTING' }) // (2) when we need to do something > call dispatch() and pass the type
    } else {
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
