/*
  Grocery Bud: Alert P3
  - since we use alert a lot > we set it as function for ease of use
  - we also want to hide the alert after 3s 
    > pass props to Alert 

  (***) It's a bit confusing when we put the showAlert() in setTimeout() > normally, the function in setTimeout() will be executed after the time expires > but in this case, we run function already at (2), then we pass that function to Alert > and the duty of setTimeout() in this case is to run cleanup for us 
    > useEffect() is in Alert > it will run when the component Alert is created ([] > empty dependency list) > when it runs, it trigger setTimeout(), then clean up after 3s
 */

import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)

  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  })

  // (1)
  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name) {
      // (2) use here
      showAlert(true, 'danger', 'please enter value')
    } else if (name && isEditing) {
      // [] deal with edit
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem])
      setName('')

      // [] show alert
    }
  }

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {/* (3) pass prop to alert > because we want to hide alert after 3s*/}
        {alert.show && <Alert {...alert} showAlert={showAlert} />}
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
          <List items={list} />
          <button className='clear-btn'>Clear Items</button>
        </div>
      )}
    </section>
  )
}

export default App
