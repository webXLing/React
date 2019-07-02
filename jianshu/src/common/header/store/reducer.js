import * as constants from './constants'
import { fromJS } from 'immutable'
// immutable库 由facebook  主要是不让你轻易改变一个对象

const defaultState = fromJS({
  focus: false
})
export default (state = defaultState, action) => {
  // const newState = JSON.parse(JSON.stringify(state))
  if (action.type === constants.SEARCH_FOCUS) {
    // newState.focus = true
    // immutable 对象 的set方法 会将你的新值 与旧对象(不改变原有对象) 整合 返回一个新的对象
    // 避免 不小心改变了state
    return state.set('focus', true)
  }
  if (action.type === constants.SEARCH_BLUR) {
    // newState.focus = false
    // return newState
    return state.set('focus', false)

  }
  return state
}
