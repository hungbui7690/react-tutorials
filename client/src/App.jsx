/*
  Redux: Initial Store

*/

import React from 'react'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import cartItems from './cart-items'
import { createStore } from 'redux'

// (1)
const initialStore = {
  count: 0,
}

function reducer(state, action) {
  console.log({ state, action })

  return state
}

// (2)
const store = createStore(reducer, initialStore)

function App() {
  return (
    <main>
      <Navbar />
      <CartContainer cart={cartItems} />
    </main>
  )
}

export default App
