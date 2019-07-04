import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' // 将action 可以是一个函数 从而可以进行异步的操作
import reducer from './reducer'
let middleware = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(...middleware)
));

export default store