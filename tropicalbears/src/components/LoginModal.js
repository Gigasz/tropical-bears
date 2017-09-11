import React, { Component } from 'react';

// Components para o formulário do modal
import TextField from 'material-ui/TextField';

// Components para renderizar o modal
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
};


//Exported Component

export default class LoginModal extends Component {

  render() {
    console.log(this.props.loginModal)

    // Array das options do Dialog
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.props.onPressLogin}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handleClose}
      />,
    ];

    // Retorna o Component
    return (
      <div>
        <Dialog
          title="Dialog With Custom Width"
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={this.props.loginModal}
        >
            <div>
                <TextField
                    hintText="e-mail"
                /><br />
                <TextField
                    hintText="password"
                    type="password"
                /><br />
            </div>
        </Dialog>
      </div>
    );
  }
}