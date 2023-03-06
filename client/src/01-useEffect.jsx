/*
  useEffect: Fundamentals P2
  - [] : initial render


  (***) don't return promise from useEffect() > don't do this: add async in callback of useEffect() 
    useEffect(async () => {
      await ...
    }, []) 

  
  (***) it's ok to do this: don't have async in callback of useEffect() 
    useEffect(() => {
      const someFunc = async () => {
        await fetch()...
      }
      someFunc()
    }, [])   

*/

import { useState, useEffect } from 'react'

const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  const sayHello = () => {
    console.log('hello there')
  }
  sayHello()

  useEffect(() => {
    console.log('hello from useEffect')
  }, []) // (***) just run on initial render > only run once

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  )
}
export default UseEffectBasics
