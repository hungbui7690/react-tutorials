const CLEAR_CART = 'CLEAR_CART'
const DECREASE = 'DECREASE'
const INCREASE = 'INCREASE'
const REMOVE = 'REMOVE'
const GET_TOTALS = 'GET_TOTALS'
const TOGGLE_AMOUNT = 'TOGGLE_AMOUNT'

// (1) go to CartItem
export const removeItem = (id) => {
  return { type: REMOVE, payload: { id } }
}

export { CLEAR_CART, DECREASE, INCREASE, REMOVE, GET_TOTALS, TOGGLE_AMOUNT }
