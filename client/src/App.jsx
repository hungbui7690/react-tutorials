/*
  Grocery Bud: Structure P1
*/

import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  // (1)
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ show: true, msg: '', type: '' }) // (***) we use object here since we want to display the message, and also we to to have multiple types of message

  // (2)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hello')
  }

  // (3)
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert />}
      </form>

      <div className='grocery-container'>
        <List />
        <button className='clear-btn'>Clear Items</button>
      </div>
    </section>
  )
}

export default App
