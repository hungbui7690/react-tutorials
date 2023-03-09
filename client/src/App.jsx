/*
  Redux: Actions as Variables
  - prevent typos
  - if we have the wrong action > no error now > hard to find where is the error



*/

import React from 'react'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import cartItems from './cart-items'
import { createStore } from 'redux'

const initialStore = {
  count: 78,
  name: 'Joe Doe',
}

// (***)
const DECREASE = 'DECREASE'
const INCREASE = 'INCREASE'
const RESET = 'RESET'
const CHANGE_NAME = 'CHANGE_NAME'

function reducer(state, action) {
  // (***) change to variables
  if (action.type === DECREASE) {
    return { ...state, count: state.count - 1 }
  }
  if (action.type === INCREASE) {
    return { ...state, count: state.count + 1 }
  }
  if (action.type === RESET) {
    return { ...state, count: 0 }
  }
  if (action.type === CHANGE_NAME) {
    return { ...state, name: 'bobo' }
  }

  return state
}

const store = createStore(reducer, initialStore)

// (***)
console.log(store.getState()) // {count: 78, name: 'Joe Doe'}
store.dispatch({ type: DECREASE })
console.log(store.getState()) // {count: 77, name: 'Joe Doe'}
store.dispatch({ type: INCREASE })
console.log(store.getState()) // {count: 78, name: 'Joe Doe'}
store.dispatch({ type: RESET })
console.log(store.getState()) // {count: 0, name: 'Joe Doe'}
store.dispatch({ type: CHANGE_NAME })
console.log(store.getState()) // {count: 0, name: 'bobo'}

function App() {
  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  )
}

export default App
