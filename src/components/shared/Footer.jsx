import React, { Fragment } from 'react';
import packageInfo from '../../../package.json';

const Footer = () => {
    return ( 
        <Fragment>
            <footer className="pt-3 mt-2 mb-2 text-muted border-top text-center">
                Copyright &copy; - Designed and Created by:
                <a className="text-gray-500 no-underline hover:no-underline mx-2" href="https://www.cmurestudillos.es" target="_blank" rel="noopener noreferrer">
                    <strong>Carlos Mur</strong>
                </a>                
                <small><i>Version: {packageInfo.version}</i></small>
            </footer>
        </Fragment>
     );
}
 
export default Footer;