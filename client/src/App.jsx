/*
  Redux: Return Action Mismatch P1

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

  return 'shake & bake' // (***) be careful with this one > this one change the initialState to "" > after that if we use the correct action type, it still doesn't work anymore > since initState now is "" > can not use {...state}
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
