/*
  Redux: getState()

*/

import React from 'react'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import cartItems from './cart-items'
import { createStore } from 'redux'

const initialStore = {
  count: 78,
}

function reducer(state, action) {
  console.log({ state, action })

  return state
}

const store = createStore(reducer, initialStore)
console.log(store.getState()) // (1) {count: 0}

function App() {
  return (
    <main>
      {/* (2) go to Navbar */}
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  )
}

export default App
