/*
  Redux: Actions as Variables P2
  - since we have many state 
    > create action.js
*/

import React from 'react'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import cartItems from './cart-items'
import { createStore } from 'redux'

// (***)
import { DECREASE, INCREASE } from './action'

const initialStore = {
  count: 78,
  name: 'Joe Doe',
}

function reducer(state, action) {
  if (action.type === DECREASE) {
    return { ...state, count: state.count - 1 }
  }
  if (action.type === INCREASE) {
    return { ...state, count: state.count + 1 }
  }

  return state
}

const store = createStore(reducer, initialStore)

store.dispatch({ type: DECREASE })
store.dispatch({ type: INCREASE })

function App() {
  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  )
}

export default App
