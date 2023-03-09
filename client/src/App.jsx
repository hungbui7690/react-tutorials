/*
  Redux: First Action
  - actions: objects > MUST HAVE TYPE PROPERTY === what kind of action
  
  (***) DON'T MUTATE THE STATE > Redux built on IMMUTABILITY (copy)

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
  // (2)
  if (action.type === 'DECREASE') {
    return { ...state, count: state.count - 1 }
  }

  return state
}

const store = createStore(reducer, initialStore)

// (1)
store.dispatch({ type: 'DECREASE' })
store.dispatch({ type: 'DECREASE' })
store.dispatch({ type: 'DECREASE' })
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
