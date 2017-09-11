import React, { Component } from 'react';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Menu extends Component {
    render () {
        return(

          <Card>
            <CardHeader
              title="Tropical Bears"
              subtitle="Todas as Categorias"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardActions expandable={true}>
              <FlatButton label="Masculino" />
              <FlatButton label="Feminino" />
              <FlatButton label="Infantil" />
              <FlatButton label="Acessórios" />
              <FlatButton label="Casa" />
              <FlatButton label="Vale-Presente" />
              <FlatButton label="Coleções" />
            </CardActions>
          </Card>
          
        );
    };
};

export default Menu;