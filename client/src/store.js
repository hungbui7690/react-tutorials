import { configureStore } from '@reduxjs/toolkit'
import './features/cart/cartSlice' // (2)

export const store = configureStore({
  reducer: {},
})
