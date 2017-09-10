import React from 'react';
import '../assets/style/App.css';
import logo from '../assets/img/bear1.jpeg';

const Header = () => {
    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Tropical Bears</h2>
        </div>
    );
};

export default Header;