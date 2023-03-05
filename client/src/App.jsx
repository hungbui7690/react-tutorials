/*
  Grocery Bud: Add Items P1

  (1) handSubmit
  (2) pass props to List.js
  (3) go to List.js 

  (***) list is only shown when having 1 or more items

*/

import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

  // (1)
  const handleSubmit = (e) => {
    // (a)
    e.preventDefault()

    // (b)
    if (!name) {
      // display alert
    } else if (name && isEditing) {
      // deal with edit
    } else {
      // (a) show alert

      // (b) create new item
      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem])
      setName('')
    }
  }

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>

      {/* (2) pass prop to List to display added items */}
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} />
          <button className='clear-btn'>Clear Items</button>
        </div>
      )}
    </section>
  )
}

export default App
