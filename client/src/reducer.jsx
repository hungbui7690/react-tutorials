import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  GET_TOTALS,
  TOGGLE_AMOUNT,
} from './action'

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
  if (action.type === DECREASE) {
    const { id } = action.payload
    const newCart = state.cart.map((cartItem) => {
      if (cartItem.id === id) {
        cartItem = { ...cartItem, amount: cartItem.amount - 1 }
      }
      return cartItem
    })

    return { ...state, cart: newCart }
  }
  if (action.type === GET_TOTALS) {
    let { total, amount } = state.cart.reduce(
      (acc, cur) => {
        acc.total += cur.price * cur.amount
        acc.amount += cur.amount
        return acc
      },
      { total: 0, amount: 0 }
    )

    total = parseFloat(total.toFixed(2))
    return { ...state, total: total, amount: amount }
  }

  // (***)
  if (action.type === TOGGLE_AMOUNT) {
    const { id } = action.payload
    const newCart = state.cart.map((cartItem) => {
      if (cartItem.id === id) {
        if (action.payload.toggleType === 'dec')
          cartItem = { ...cartItem, amount: cartItem.amount - 1 }
        else cartItem = { ...cartItem, amount: cartItem.amount + 1 }
      }
      return cartItem
    })

    return { ...state, cart: newCart }
  }

  return state
}

export default reducer
