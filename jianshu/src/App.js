import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import './App.scss'
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail'


import store from './store'

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <div className="test" >
          <Header></Header>
          <BrowserRouter>
            <div>
              {/* <Route path='/' exact render={() => <div>根目录</div>}></Route> */}
              <Route path='/detail' exact component={Detail}></Route>
              <Route path='/' exact component={Home}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider >
    );
  }
}

export default App;
