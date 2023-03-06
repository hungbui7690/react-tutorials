/*
  Close Modal after 3s
    (1), (2), (3) in index.js
    (4) ở Modal.js
*/

import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../data'

const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payload]
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'item added',
    }
  }

  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'Please enter value',
    }
  }

  // (2) we want to close model after 3s > so that, we need to pass the prop to Modal.js
  if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModalOpen: false, modalContent: '' }
  }

  throw new Error('No matching Action Type')
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
      const newItem = { id: new Date().getTime().toString(), name }
      dispatch({ type: 'ADD_ITEM', payload: newItem })
      setName('')
    } else {
      dispatch({ type: 'NO_VALUE' })
    }
  }

  // (1)
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  return (
    <React.Fragment>
      {/* (3) pass prop to Modal.js [closeModal] */}
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
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
