// import * as constants from './constants'
import { fromJS } from 'immutable'
// immutable库 由facebook  主要是不让你轻易改变一个对象

const defaultState = fromJS({
  topicList: [],
  articleList: [],

  recommendList: []
})
export default (state = defaultState, action) => {
  switch (action.type) {

    case 'chang_home_data':
      console.log(action)
      // return state.set('list', action.data).set('totalPage', action.totalPage)  //return 了 不需break
      return state.merge({
        topicList: fromJS(action.topicList), // 
        recommendList: fromJS(action.recommendList),
        articleList: fromJS(action.articleList)
      })



    default: return state
  }

}
