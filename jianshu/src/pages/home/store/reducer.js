// import * as constants from './constants'
import { fromJS } from 'immutable'
// immutable库 由facebook  主要是不让你轻易改变一个对象

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '社会热点',
      src: '//upload.jianshu.io/admin_banners/web_images/4677/a6d5d4ae2540976a7bd62e9db466b0301414d319.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    },
    {
      id: 2,
      title: '手绘',
      src: '//upload.jianshu.io/admin_banners/web_images/4677/a6d5d4ae2540976a7bd62e9db466b0301414d319.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    }
  ]
})
export default (state = defaultState, action) => {
  switch (action.type) {

    // case constants.CHANGE_LIST:
    //   // return state.set('list', action.data).set('totalPage', action.totalPage)  //return 了 不需break
    //   return state.merge({
    //     list: action.data,
    //     totalPage: action.totalPage
    //   })



    default: return state
  }

}
