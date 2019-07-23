// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'

// import hearderReducer from '../common/header/store/reducer'
import { reducer as hearderReducer } from '../common/header/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as detailReducer } from '../pages/detail/store'



export default combineReducers({
  header: hearderReducer,
  home: homeReducer,
  detail: detailReducer
})