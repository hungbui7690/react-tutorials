/*
  useEffect: Why 
  
  - initial render - setup state value and invoke sayHello
  - in the sayHello update state, trigger re-render

  - re-render - setup state value and invoke sayHello
  - in the sayHello update state, trigger re-render
  
  - repeat
  - repeat
  - repeat
  

  > should we use functional update approach for everything?
  > useEffect() can run conditionally
*/

import { useState } from 'react'

const ComponentExample = () => {
  const [value, setValue] = useState(0)

  // every time this component renders, this function will be re-created
  const sayHello = () => {
    console.log('hello there')

    // setValue(value + 1) // (***) be careful > this will trigger inf loop > since it will trigger re-render (because of setState) > then the sayHello() at (xxx) will be invoke
  }

  sayHello() // (xxx) this function be invoke in every render

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  )
}
export default ComponentExample
