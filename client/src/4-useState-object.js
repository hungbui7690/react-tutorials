/*
  - in this lesson, we learn how to update property in object without wiping all data > spread operator
  
    (***) setPerson({ ...person, message: 'hello world' })
*/

import React, { useState } from 'react'

const UseStateObject = () => {
  // (1) similar to previous lesson, we can pass variable into useState() to set default data > in this case, default value is an object
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 23,
    message: 'random message',
  })
  // console.log(person)

  // (2)
  const changeMessage = () => {
    // > setPerson({message: hello world}) // if we write like this, we will overwrite the original object with new object > wipe out the old one

    // > to solve this, we need to use spread operator to copy object first, then update the property we want
    setPerson({ ...person, message: 'hello world' })
  }

  return (
    <React.Fragment>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>

      {/* (3) */}
      <button className='btn' onClick={changeMessage}>
        Change Message
      </button>
    </React.Fragment>
  )
}

export default UseStateObject
