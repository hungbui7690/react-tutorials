import { CLEAR_CART, REMOVE, INCREASE, DECREASE } from './action'

function reducer(state, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] }
  }
  if (action.type === INCREASE) {
    console.log('increase')
  }
  if (action.type === DECREASE) {
    console.log('decrease')
  }

  // (***)
  if (action.type === REMOVE) {
    const newCart = state.cart.filter(
      (cartItem) => cartItem.id !== action.payload.id
    )
    return { ...state, cart: newCart }
  }

  return state
}

export default reducer
