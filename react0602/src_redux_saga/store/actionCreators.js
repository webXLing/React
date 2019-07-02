import { INIT_SAGE_LIST,INIT_LIST, CHANGE_LIST, CHANGE_INPUT, POP_LIST } from './actionTypes'
// import Axios from 'axios';

export const getImpChangeAction = (value) => ({
  type: CHANGE_INPUT,
  value
})

export const getPopListAction = (value) => ({
  type: POP_LIST,
  value
})

export const getChangeListAction = () => ({
  type: CHANGE_LIST
})

export const initListaction = (data) => ({
  type: INIT_LIST,
  data
})

export const getSagaList = (data) => ({
  type: INIT_SAGE_LIST,
  data
})

// redux-thunk 使得actionCreators 可以是return 一个函数  可以进行异步操作
// export const getList = () => { // 异步操作
//   return (dispatch) => {
//     console.log(dispatch, 'dispatch')
//     Axios('/list.json')
//       .then(res => {
//         if (res.status === 200) {
//           console.log('axios')
//           const action = initListaction(res.data)
//           dispatch(action)
//         }
//         console.log(res)
//       })
//       .catch(error => {
//         console.log(error)
//       })
//   }
// }
