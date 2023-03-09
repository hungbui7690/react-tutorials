/*
  Redux: Separate reducer
  
  > create reducer.js

*/

import { DECREASE, INCREASE } from './action'
import React from 'react'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import cartItems from './cart-items'
import { createStore } from 'redux'

// (***)
import reducer from './reducer'

const initialStore = {
  count: 78,
  name: 'Joe Doe',
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
