/*
  Redux: Initial Setup
  - pic: cart-exercise
  - we built this project before with reducer and context API > react-mini-projects: Cart-useReducer
    > we want to build again using Redux

  (1) check package.json, we need these 2: 
        "react-redux": "^7.2.0",
        "redux": "^4.0.5",

/////////////////////////////////////////////

  Redux: Intro
  - not from official react
  - very similar to context API > but a little more rigid and opinionated > more structures & more rules
  - redux can be used with angular/vue as well
  - use when work with more than 1 person
  - we don't need to use redux for all projects, but we still need to learn it 

  > pic: redux-intro
  > global states === store > similar to context API
    > store === single source of truth

*/

import React from 'react'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import cartItems from './cart-items'

function App() {
  return (
    <main>
      <Navbar />
      <CartContainer cart={cartItems} />
    </main>
  )
}

export default App
