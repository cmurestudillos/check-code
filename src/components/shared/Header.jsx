import React, {Fragment} from 'react';
import logo from '../../assets/img/logo.svg';

const Header = () => {
    return ( 
        <Fragment>
            <header className="pb-3 mb-4 border-bottom">
                <div className="d-flex">
                    <div className="p-2 flex-grow-1">
                        <span className="d-flex align-items-center text-dark text-decoration-none">
                            <img src={logo} width={64} height={64} alt="Diff Checked Code" title="Diff Checked Code" />
                            <span className="fs-4">Diff Check</span>
                        </span>                        
                    </div>
                </div>                
            </header>  
        </Fragment>
    );
}
 
export default Header;