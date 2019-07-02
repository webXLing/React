// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'

// import hearderReducer from '../common/header/store/reducer'
import { reducer as hearderReducer } from '../common/header/store'

export default combineReducers({
  header: hearderReducer
})