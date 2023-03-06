/*

*/

import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../data'

const reducer = (state, action) => {
  // (2) take the item out, then add to the state
  if (action.type === 'ADD_ITEM') {
    // (a)
    const newPeople = [...state.people, action.payload]

    // (b)
    return {
      ...state,
      people: newPeople, // (c) add here
      isModalOpen: true,
      modalContent: 'item added',
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

    // (1)
    if (name) {
      // (a) create item {}
      const newItem = { id: new Date().getTime().toString(), name }

      // (b) use dispatch to send to reducer() > "payload" === naming convention
      dispatch({ type: 'ADD_ITEM', payload: newItem })

      // (c)
      setName('')
    } else {
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
