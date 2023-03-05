/*
  useReducer: Initial Setup 

  - useReducer() hook is used when we have complicated setup
    > with some simple app like to list, use useState() is enough, we don't have to use useReducer()

  - but when our app gets more complicated, it's a good practice to use useReducer > because it add more structure to the state, so that we cannot add or change the states easily > we must follow the structure to do that 
    > we must go through certain steps 
    > it's useful when we work with team.

//////////////////////////////////////////////////////////

  - folder structure > we have /setup folder > contains: index.jsx & Modal.jsx
    > because we have index.jsx in /setup > when we import into App.js, we don't have to specify the exact file, but just need to import folder 
      + /setup/index.jsx imports Modals.js 
      + App.js just need to import /setup > and then we can use Modal.jsx
    > because if any folder that has index.jsx > that index.jsx file will become the main entry point of that folder

*/

import React from 'react'
import Setup from './setup'

function App() {
  return (
    <div className='container'>
      <Setup />
    </div>
  )
}

export default App
