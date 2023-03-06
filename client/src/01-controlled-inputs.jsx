/*
  Form: User Challenge P3
  - Remove User when click on Remove Button

*/

import { useState } from 'react'
import { data } from './data'

const UserChallenge = () => {
  const [name, setName] = useState('')
  const [users, setUsers] = useState(data)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name) return

    const fakeID = new Date().getTime()
    const newUser = { name, id: fakeID }

    const updatedUsers = [...users, newUser]
    setUsers(updatedUsers)
    setName('')
  }

  // (***)
  const removeUser = (id) => {
    const updatedUsers = users.filter((u) => u.id !== Number(id))
    setUsers(updatedUsers)
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            value={name}
            onChange={(e) => setName(e.target.value)}
            id='name'
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>

      {/* render users */}
      <h2>users</h2>
      {users.map((user) => {
        return (
          <div key={user.id} className='people-section'>
            <h4>{user.name}</h4>

            {/* (***) */}
            <button className='btn' onClick={() => removeUser(user.id)}>
              remove
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default UserChallenge
