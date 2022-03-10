import React, {Fragment} from 'react';
// Imagenes
import text from '../../assets/img/text.svg';

const Jumbotron = () => {
    return ( 
        <Fragment>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="py-1">
                    <div className="row">
                        <div className="col-md-2">
                            <img src={text} width={128} height={128} alt="Text" title="Text" />    
                        </div>
                        <div className="col-md-10 fs-4 py-3">
                            Diff Check "<strong>Text</strong>" comparará el texto para encontrar la diferencia entre dos archivos.
                            Simplemente pegue el contenido de sus archivos y haga clic en <strong>"Mostrar diferencias"</strong>.                            
                        </div> 
                    </div>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Jumbotron;