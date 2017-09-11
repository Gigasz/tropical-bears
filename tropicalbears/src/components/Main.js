import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import '../assets/style/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {

} from 'material-ui';

import ProductGrid from './ProductGrid';
import Header from './Header';
import Menu from './Menu';
import LoginModal from './LoginModal';


class Main extends Component {
  state = { userMenu: false, logged: false, loginModal: false };

  onClickLogin(state) {
    return this.setState({ loginModal: state });
  }

  render() {
    console.log(this.state.loginModal);
    console.log(this.state.userMenu);
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          <LoginModal
            loginModal = {this.state.loginModal}
            onPressLogin={() => this.onClickLogin(false)}
          />
          <Header
            onPressLogin={() => this.onClickLogin(true)}
          />
          <Menu
          />
          <ProductGrid
          productData = {productData} 
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

const productData = [
  {
    img: '../assets/img/produto.jpg',
    title: 'Camisa',
    author: 'Gigasz'
  },
  {
    img: '../assets/img/bear1.jpeg',
    title: 'Camisa',
    author: 'Gigasz'
  },
  {
    img: '../assets/img/produto.jpg',
    title: 'Camisa',
    author: 'Gigasz'
  },
  {
    img: '../assets/img/produto.jpg',
    title: 'Camisa',
    author: 'Gigasz'
  },
  {
    img: '../assets/img/produto.jpg',
    title: 'Camisa',
    author: 'Gigasz'
  },
  {
    img: '../assets/img/produto.jpg',
    title: 'Camisa',
    author: 'Gigasz'
  },
  {
    img: '../assets/img/produto.jpg',
    title: 'Camisa',
    author: 'Gigasz'
  },
  {
    img: '../assets/img/produto.jpg',
    title: 'Camisa',
    author: 'Gigasz'
  },
  {
    img: '../assets/img/produto.jpg',
    title: 'Camisa',
    author: 'Gigasz'
  },
  {
    img: '../assets/img/produto.jpg',
    title: 'Camisa',
    author: 'Gigasz'
  },
  {
    img: '../assets/img/produto.jpg',
    title: 'Camisa',
    author: 'Gigasz'
  },
  {
    img: '../assets/img/produto.jpg',
    title: 'Camisa',
    author: 'Gigasz'
  },
];

export default Main;