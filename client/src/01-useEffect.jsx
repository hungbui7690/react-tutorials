/*
  useEffect: Multiple Effects
  
  (***) just because we can do this, it does not mean we should do this
*/

import { useState, useEffect } from 'react'

const MultipleEffects = () => {
  const [value, setValue] = useState(0)
  const [secondValue, setSecondValue] = useState(0)

  // (***) both useEffect() will run at initial renders (mounting phase) > then run again when the value in dependency list changes
  useEffect(() => {
    console.log('[1] hello from first useEffect')
  }, [value])

  useEffect(() => {
    console.log('[2] hello from second useEffect')
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
