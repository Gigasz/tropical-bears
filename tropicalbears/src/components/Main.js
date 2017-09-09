import React, { Component } from 'react';
import logo from './assets/img/bear1.jpeg';
import '../App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  RaisedButton
} from 'material-ui'

class Main extends Component {
    render() {
        return (
<MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Tropical Bears</h2>
          </div>
          <div className="App-Body">
            <p className="App-intro">
              <RaisedButton />
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </div>
</MuiThemeProvider>
        );
    }
}

export default Main;