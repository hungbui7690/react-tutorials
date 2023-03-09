import { DECREASE, INCREASE } from './action'

function reducer(state, action) {
  if (action.type === DECREASE) {
    return { ...state, count: state.count - 1 }
  }
  if (action.type === INCREASE) {
    return { ...state, count: state.count + 1 }
  }

  return state
}

export default reducer
