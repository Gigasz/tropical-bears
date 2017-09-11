import React, { Component } from 'react';
import {
  GridList,
  GridTile,
  Subheader,
  IconButton,
} from 'material-ui';
import ShirtCardImage from '../assets/img/produto.jpg';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

class ProductGrid extends Component {
    render() {
        return (
                      <GridList
            cellHeight={180}
            style={styles.gridList}
            cols={4}
          >
            <Subheader>Camisas</Subheader>
            {this.props.productData.map((tile, index) => {
              console.log(tile.img);
              return (
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
        );
    };
};

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

export default ProductGrid;