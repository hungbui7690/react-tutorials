/*
  Redux: Return Action Mismatch P2

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
  if (action.type === 'DECREASE') {
    return { ...state, count: state.count - 1 }
  }

  return state // (***) if we use this, if action mismatches > nothing happens > but if we don't have this return line > error
}

const store = createStore(reducer, initialStore)

// (***)
store.dispatch({ type: 'ABC' })
store.dispatch({ type: 'DECREASE' })
console.log(store.getState())

function App() {
  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  )
}

export default App
