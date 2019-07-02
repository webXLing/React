import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { INIT_SAGE_LIST } from './actionTypes'
import { initListaction } from './actionCreators'
import Axios from 'axios'
function* fetchUser () {
  try {

    console.log('fetchUser')
    const res = yield Axios('/list.json')
    yield put(initListaction(res.data))
    console.log(res)
  }catch(e){
    console.log(e)
  }


}
function* mySaga () {
  yield takeEvery(INIT_SAGE_LIST, fetchUser); // 捕获每个目标的 action
}

export default mySaga;