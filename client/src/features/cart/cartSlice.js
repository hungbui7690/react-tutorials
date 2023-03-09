import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItem: [],
  amount: 0,
  total: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
})

console.log(cartSlice)

// (1) we just want the reducer to control our store
export default cartSlice.reducer
