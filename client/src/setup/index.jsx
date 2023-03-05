/*
  
  - check requirement.png and guess how many states that we need > and which way we need to use to get the input

  (1) create states in index.jsx
  (2) setup return (form và input > use controlled input)
  (3) handleSubmit() 

*/

import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../data'

const Index = () => {
  // (1)
  const [name, setName] = useState('')
  const [people, setPeople] = useState(data)
  const [showModal, setShowModel] = useState(false)

  // (3)
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  // (2)
  return (
    <React.Fragment>
      {showModal && <Modal />}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text value '
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit'>add</button>
      </form>
    </React.Fragment>
  )
}

export default Index
