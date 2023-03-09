/*
  Redux: Setup Store 

  > pic: redux-intro
  > global states === store > similar to context API
    > store === single source of truth

*/

import React from 'react'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import cartItems from './cart-items'

// (1) deprecated > later we will learn Redux Tool Kit
import { createStore } from 'redux'

// (2)
function reducer(state, action) {
  console.log({ state, action }) // {state: undefined, action: {…}}
}

// (3)
const store = createStore(reducer)

function App() {
  return (
    <main>
      <Navbar />
      <CartContainer cart={cartItems} />
    </main>
  )
}

export default App
