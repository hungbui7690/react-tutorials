/*
  useState: Object P2

*/

import { useState } from 'react'

const UseStateObject = () => {
  // (1)
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    hobby: 'read books',
  })

  // (3)
  const displayPerson = () => {
    // (***) these 2 lines will overwrite the object
    // setPerson({ name: 'john', age: 28, hobby: 'scream at the computer' })
    // setPerson({ name: 'susan' })

    // (***) copy object, then modify/add data
    setPerson({ ...person, name: 'susan' })
  }

  // (2) access states
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys To: {person.hobby}</h4>

      {/* (4) */}
      <button className='btn' onClick={displayPerson}>
        show info
      </button>
    </>
  )
}

export default UseStateObject
