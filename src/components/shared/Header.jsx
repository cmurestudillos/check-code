import React, {Fragment} from 'react';
import logo from '../../images/logo.svg';

const Header = () => {
    return ( 
        <Fragment>
            <header id="header">
                <h1>
                    <img src={logo} alt="Logo" />
                    <a href="/">Diff Check</a> by Carlos Mur
                </h1>

                <nav id="nav">
                    <ul>
                        <li><a href="/">Inicio</a></li>
                    </ul>
                </nav>
            </header>       
        </Fragment>
    );
}
 
export default Header;