/*
  useState: Object P1

*/

import { useState } from 'react'

const UseStateObject = () => {
  // (1) setup multiple states
  const [name, setName] = useState('peter')
  const [age, setAge] = useState(24)
  const [hobby, setHobby] = useState('read books')

  // (2) update multiple states
  const displayPerson = () => {
    setName('john')
    setAge(28)
    setHobby('scream at the computer')
  }

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h4>Enjoys To: {hobby}</h4>
      <button className='btn' onClick={displayPerson}>
        show john
      </button>
    </>
  )
}

export default UseStateObject
