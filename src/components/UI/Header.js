import React from 'react';

import logo from '../../img/logo.png';
import './Header.css'

const Header = () => {
    return(
        <header className="header">
            <img src={logo} alt="LOGO" className="header__img" />
        </header>
    )
};

export default Header;