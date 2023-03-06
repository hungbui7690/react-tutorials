/*

  index.js
  (1) setup default state display people array and model 

  index.js
  (2) pass prop to Modal.js
  
  Modal.js
  (3) destructure and display

  > with reducer, when we want to update the state > we need to call dispatch(), and we just need to handle in one page > and that is reducer()
 */

import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../data'

const reducer = (state, action) => {}

const defaultState = {
  people: data, // (1b) load local data
  isModalOpen: true,
  modalContent: 'hello world', // (1a)
}

const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name) {
    } else {
    }
  }

  return (
    <React.Fragment>
      {/* (2a) pass state to modal */}
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

      {/* (2b) */}
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
