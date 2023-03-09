/*
  Redux: Reducer - Default State

  (1) action.js

*/

import React from 'react'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import { createStore } from 'redux'
import reducer from './reducer'
import { Provider } from 'react-redux'

// (1) remove initialStore arg > error > then move initialStore to reducer
const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  )
}

export default App
