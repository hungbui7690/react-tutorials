/*
  - this is how we setup this app using useState() 
    > next lecture, we will use useReducer()

 */

import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../data'

const Index = () => {
  const [name, setName] = useState('')
  const [people, setPeople] = useState(data)
  const [showModal, setShowModel] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    // (1) handle submit > then display in (2)
    if (name) {
      setShowModel(true)
      setPeople([...people, { id: new Date().getTime().toString(), name }])
      setName('')
    } else {
      setShowModel(true)
    }
  }

  return (
    <React.Fragment>
      {showModal && <Modal />}
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

      {/* (2) display people */}
      {people.map((person) => {
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
