/*
  Redux: Provider Setup
  - we will connect our app to redux
  
    a> Provider : similar to context API
    b> connect : used in components

*/

import React from 'react'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import cartItems from './cart-items'
import { createStore } from 'redux'
import reducer from './reducer'

import { Provider } from 'react-redux' // (1) now we use 'react-redux'

const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
}

const store = createStore(reducer, initialStore)

function App() {
  // (2) wraps the app > need to have store props
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer cart={cartItems} />
    </Provider>
  )
}

export default App
