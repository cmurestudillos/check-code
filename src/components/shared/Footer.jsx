import React, { Fragment } from 'react';
import packageInfo from '../../../package.json';

const Footer = () => {
    return ( 
        <Fragment>
            <footer id="footer">
					<ul className="icons">
						<li><a href="https://www.linkedin.com/in/carlos-mur-estudillos-89671346/" className="icon brands fa-linkedin" target="_blank" rel="noopener noreferrer"><span className="label">LinkedIn</span></a></li>
						<li><a href="https://github.com/cmurestudillos" className="icon brands fa-github" target="_blank" rel="noopener noreferrer"><span className="label">Github</span></a></li>
						<li><a href="https://www.buymeacoffee.com/cmur" className="icon brands fa-microblog" target="_blank" rel="noopener noreferrer"><span className="label">ByMeaCoffe</span></a></li>
					</ul>
					<ul className="copyright">
						<li>Version: {packageInfo.version} | &copy; All rights reserved.</li><li>Design by: <strong><i>Carlos Mur</i></strong></li>
					</ul>
				</footer>            
        </Fragment>
     );
}
 
export default Footer;