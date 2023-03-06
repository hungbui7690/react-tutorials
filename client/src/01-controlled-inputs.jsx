/*
  Form: User Challenge P1

  - setup controlled input (name input)
  - setup onSubmit (for now just placeholder)
  - import data array (first array) from data
  - create another state value (data as default)
  - iterate over and display right after form (h4)
  - when user submits the form add new person to the list

  - Extra Challenge
    - add button and setup functionality to remove user
    
*/

import { useState } from 'react'
import { data } from './data' // (***)

const UserChallenge = () => {
  // (1)
  const [name, setName] = useState('')
  const [users, setUsers] = useState(data)

  return (
    <div>
      <form className='form'>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            value={name} // (2a)
            onChange={(e) => setName(e.target.value)} // (2b)
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
            <button className='btn'>remove</button>
          </div>
        )
      })}
    </div>
  )
}

export default UserChallenge
