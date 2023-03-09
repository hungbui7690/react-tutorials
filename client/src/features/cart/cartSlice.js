import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItem: [],
  amount: 0,
  total: 0,
}

// (1) back to store > import
const cartSlice = createSlice({
  name: 'cart',
  initialState,
})

console.log(cartSlice)
