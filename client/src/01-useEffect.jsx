/*
  useEffect: Multiple Effects P1
  
  (***) just because we can do this, it does not mean we should do this
*/

import { useState, useEffect } from 'react'

const MultipleEffects = () => {
  const [value, setValue] = useState(0)
  const [secondValue, setSecondValue] = useState(0)

  useEffect(() => {
    console.log('********************')
    console.log('[1] hello from first useEffect')
  }, [value, secondValue]) // (***) we can add multiple values in dep list

  useEffect(() => {
    console.log('> [2] hello from second useEffect')
  }, [secondValue])

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        value
      </button>
      <h1>second value : {secondValue}</h1>
      <button className='btn' onClick={() => setSecondValue(secondValue + 1)}>
        second value
      </button>
    </div>
  )
}
export default MultipleEffects
