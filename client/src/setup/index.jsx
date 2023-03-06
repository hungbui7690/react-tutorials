/*

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

  // (2)
  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'Please enter value',
    }
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
      // (1)
      dispatch({ type: 'NO_VALUE' })
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
