import React, { Component } from 'react';
import background from '../assets/img/bear1.jpeg';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import '../assets/style/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {
  RaisedButton,
  AppBar,
  Drawer,
  MenuItem,
  GridList,
  GridTile,
  Subheader,
  IconButton,
} from 'material-ui';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Header from './Header';

import ShirtCardImage from '../assets/img/produto.jpg';

class Main extends Component {
  state = { userMenu: false };
    render() {
      console.log(this.state.userMenu);
        return (
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} >
            <div>
                      <AppBar
                        title='Tropical Bears'
                        onLeftIconButtonTouchTap={() => {this.setState({ userMenu: true }); console.log('oi')}}
                      />
                      <Drawer
                        open={this.state.userMenu}
                      >
                        <MenuItem>Carrinho</MenuItem>
                        <MenuItem>Conta</MenuItem>
                        <MenuItem>Histórico</MenuItem>
                        <MenuItem onClick={() => this.setState({ userMenu: false })}>Fechar</MenuItem>
                      </Drawer>
                        <Card>
                          <CardHeader
                            title="Camisas"
                            subtitle="Todas as Categorias"
                            actAsExpander={true}
                            showExpandableButton={true}
                          />
                          <CardActions expandable={true}>
                            <FlatButton label="Masculino" />
                            <FlatButton label="Feminino" />
                          </CardActions>
                        </Card>
                        <GridList
                          cellHeight={180}
                          style={styles.gridList}
                        >
                          <Subheader>Camisas</Subheader>
                          {productData.map((tile, index) => {
                            console.log(tile.img);
                            return(
                            <GridTile
                              key={index}
                              title={tile.title}
                              subtitle={<span>by <b>{tile.author}</b></span>}
                              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                            >
                              <img src={ShirtCardImage} alt='' className='ShirCardImage' />
                            </GridTile>);
                          })}
                        </GridList>
            </div>
          </MuiThemeProvider>
        );
    }
}

const productData = [
  {
    img: 'assets/img/produto.jpg',
    title: 'Camisa',
    author: 'Gigasz'
  },
  {
    img: 'assets/img/bear1.jpeg',
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
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: 600,
    overflowY: 'auto',
  },
};

export default Main;