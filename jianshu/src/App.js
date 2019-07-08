import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.scss'
import Header from './common/header'
import store from './store'
import { Provider } from 'react-redux'

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <div className="test" >
          <Header></Header>
          <BrowserRouter>
            <div>
              <Route path='/' exact render={() => <div>根目录</div>}></Route>
              <Route path='/detail' render={() => <div>detail目录</div>}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider >
    );
  }
}

export default App;
