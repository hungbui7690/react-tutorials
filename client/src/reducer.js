import { CLEAR_CART, REMOVE, INCREASE, DECREASE } from './action'

function reducer(state, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] }
  }
  if (action.type === REMOVE) {
    const newCart = state.cart.filter(
      (cartItem) => cartItem.id !== action.payload.id
    )
    return { ...state, cart: newCart }
  }

  // (***)
  if (action.type === INCREASE) {
    const { id } = action.payload
    const newCart = state.cart.map((cartItem) => {
      if (cartItem.id === id) {
        cartItem = { ...cartItem, amount: cartItem.amount + 1 }
      }
      return cartItem
    })
    return { ...state, cart: newCart }
  }

  // (***)
  if (action.type === DECREASE) {
    let newCart = []
    const { id, amount } = action.payload
    if (amount === 1) {
      newCart = state.cart.filter((cartItem) => cartItem.id !== id)
    } else {
      newCart = state.cart.map((cartItem) => {
        if (cartItem.id === id) {
          cartItem = { ...cartItem, amount: cartItem.amount - 1 }
        }
        return cartItem
      })
    }

    return { ...state, cart: newCart }
  }

  return state
}

export default reducer
