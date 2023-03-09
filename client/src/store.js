import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './features/cart/cartSlice' // (2a)

export const store = configureStore({
  reducer: {
    cart: cartReducer, // (2b) no error now
  },
})
