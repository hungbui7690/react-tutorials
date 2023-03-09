/*
  Redux: More Actions

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
    return { count: state.count - 1 }
  }

  // (***)
  if (action.type === 'INCREASE') {
    return { count: state.count + 1 }
  }
  if (action.type === 'RESET') {
    return { count: 0 }
  }

  return state
}

const store = createStore(reducer, initialStore)

// (***)
store.dispatch({ type: 'DECREASE' })
console.log(store.getState()) // 77
store.dispatch({ type: 'INCREASE' })
console.log(store.getState()) // 78
store.dispatch({ type: 'RESET' })
console.log(store.getState()) // 0

function App() {
  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  )
}

export default App
