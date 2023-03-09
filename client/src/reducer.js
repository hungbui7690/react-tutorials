import { CLEAR_CART, REMOVE, INCREASE, DECREASE } from './action'

function reducer(state, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] }
  }

  // (2)
  if (action.type === INCREASE) {
    console.log('increase')
  }
  if (action.type === DECREASE) {
    console.log('decrease')
  }
  if (action.type === REMOVE) {
    console.log('remove')
  }

  return state
}

export default reducer
