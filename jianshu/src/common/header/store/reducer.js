import * as constants from './constants'
import { fromJS } from 'immutable'
// immutable库 由facebook  主要是不让你轻易改变一个对象

const defaultState = fromJS({
  focus: false,
  list: [],  // list 是引用类型 fromJS会再做处理 将其变为 immutable对象
  mouseIn: false,
  totalPage: 0,
  page: 0
})
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return state.set('focus', true)

    case constants.SEARCH_BLUR:
      return state.set('focus', false)

    case constants.CHANGE_LIST:
      // return state.set('list', action.data).set('totalPage', action.totalPage)  //return 了 不需break
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })

    case constants.MOUSECHANGGE:
      return state.set('mouseIn', action.data)

    case constants.CHANGREPAGE:
      return state.set('page', action.page)

    default: return state
  }
  // if (action.type === constants.SEARCH_FOCUS) {
  // newState.focus = true
  // immutable 对象 的set方法 会将你的新值 与旧对象(不改变原有对象) 整合 返回一个新的对象
  // 避免 不小心改变了state
  //   return state.set('focus', true)
  // }
}
