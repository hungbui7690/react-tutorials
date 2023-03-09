import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItem: [],
  amount: 5,
  total: 150,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
})

export default cartSlice.reducer
