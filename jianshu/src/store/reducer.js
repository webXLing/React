import { combineReducers } from 'redux'
// import hearderReducer from '../common/header/store/reducer'
import { reducer as hearderReducer } from '../common/header/store'

export default combineReducers({
  header: hearderReducer
})