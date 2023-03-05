/*
  Grocery Bud: Local Storage
  - now we want to save the list in localStorage because we don't want to lose the item after refreshing our app

  > we want to update the localStorage every time there are some changes in the list > use useEffect(, [list]) to achieve that 
 */

import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

// (2) load from local storage
const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) return JSON.parse(list)
  else return []
}

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState(getLocalStorage()) // (3) use here
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)

  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name) {
      showAlert(true, 'danger', 'please enter value')
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name }
          }
          return item
        })
      )
      setName('')
      setEditID(null)
      setIsEditing(false)
      showAlert(true, 'success', 'value changed')
    } else {
      showAlert(true, 'success', 'item added to the list')
      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem])
      setName('')
    }
  }

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }

  const clearList = () => {
    setList([])
    showAlert(true, 'danger', 'empty list')
  }

  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed')
    setList(list.filter((item) => item.id !== id))
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditID(id)
    setName(specificItem.title)
  }

  // (1) local storage
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list)) // (***) we can only store string in local storage
  }, [list]) // (***)

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
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

      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearList}>
            Clear Items
          </button>
        </div>
      )}
    </section>
  )
}

export default App
