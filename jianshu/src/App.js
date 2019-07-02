import React from 'react';
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
        </div>
      </Provider>
    );
  }
}

export default App;
