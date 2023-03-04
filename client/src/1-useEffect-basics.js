/*
  In React, useState() and useEffect() are the most used hooks

  useEffect(): 
  - allow us to do the side effects (any work outside of the component > maybe change document title, signing up for subscription, fetching data, setting up an event listener ...) 

  - by default, useEffect runs after every re-render 

  - Usage: 
    + cleanup function
    + second parameter

/////////////////////////////////////////////////////

  Log out 'render component' twice because in index.js, we have StrictMode tag: 
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    )

  If we want to show once > remove StrictMode tag: 
    ReactDOM.render(
        <App />,
      document.getElementById('root')
    )
  

  > In this case, we can see that console.log() is the side effect 

*/

// (2) import {useEffect}
import React, { useEffect } from 'react'

// (3)
const UseEffectBasics = () => {
  useEffect(() => {
    console.log('call useEffect') // runs every render
  })

  // (1)
  console.log('render component') // run first

  return <h2>useEffect Basics</h2>
}

export default UseEffectBasics
