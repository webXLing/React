import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './TodoList'
// react-redux
import { Provider } from 'react-redux'
import store from './store'

// Provider 这个提供器连接了store ，那么 provider 里面的组件都有能力获取store
const App = (
  <Provider store={store}> 
    <TodoList name='xl' />
  </Provider>
)
ReactDOM.render(App, document.getElementById('root'));