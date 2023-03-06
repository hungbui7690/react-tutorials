/*
  useState: Basics P1
*/

import { useState } from 'react'

const UseStateBasics = () => {
  // (***) we can use useState() with anything: string, number, boolean, array, object
  // console.log(useState());
  // console.log(useState('hello'));

  // (***)
  const value = useState()[0]
  const handler = useState()[1]
  console.log(value, handler) // undefined, f

  return (
    <div>
      <h1>useState() Basics</h1>
    </div>
  )
}

export default UseStateBasics
