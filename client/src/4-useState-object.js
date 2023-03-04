import React, { useState } from 'react'

const UseStateObject = () => {
  // (1) this is the other way to write object > with this, we don't worry about wiping out data while update property
  const [name, setName] = useState('Peter')
  const [age, setAge] = useState(24)
  const [message, setMessage] = useState('random message')

  const changeMessage = () => {
    // (2) set only the state we want
    setMessage('hello')
  }

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className='btn' onClick={changeMessage}>
        Change Message
      </button>
    </>
  )
}

export default UseStateObject
