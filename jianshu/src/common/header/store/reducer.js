import * as constants from './constants'

const defaultState = {
  focus: false
}
export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  if (action.type === constants.SEARCH_FOCUS) {
    newState.focus = true
    return newState
  }
  if (action.type === constants.SEARCH_BLUR) {
    newState.focus = false
    return newState
  }
  return state
}
