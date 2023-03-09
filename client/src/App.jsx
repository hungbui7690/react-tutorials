/*
  Redux: More Complicated State P1

*/

import React from 'react'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import cartItems from './cart-items'
import { createStore } from 'redux'

const initialStore = {
  count: 78,
  name: 'Joe Doe', // (***)
}

function reducer(state, action) {
  if (action.type === 'DECREASE') {
    return { count: state.count - 1 } // (***) PROBLEM: we overwrote the initialState
  }
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
console.log(store.getState()) // {count: 78, name: 'Joe Doe'}
store.dispatch({ type: 'DECREASE' })
console.log(store.getState()) // {count: 77}
store.dispatch({ type: 'INCREASE' })
console.log(store.getState()) // {count: 78}
store.dispatch({ type: 'RESET' })
console.log(store.getState()) // {count: 0}

function App() {
  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  )
}

export default App
