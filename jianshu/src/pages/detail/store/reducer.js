// import * as constants from './constants'
import { fromJS } from 'immutable'
import * as constants from './constants'
// immutable库 由facebook  主要是不让你轻易改变一个对象

const defaultState = fromJS({

  title: '',
  content: ''
})
export default (state = defaultState, action) => {
  console.log('detail action', action)
  switch (action.type) {
    case constants.SET_DETAIL:
      return state.set('title', action.title).set('content', action.content)  //return 了 不需break

    default: return state
  }

}
