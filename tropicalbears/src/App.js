import { createStore, applyMiddleware } from 'redux';
import React, { Component } from 'react';
import reducers from './reducers';
import Main from './components/Main';

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware());
    return (
      <Main />
    );
  }
}

export default App;
