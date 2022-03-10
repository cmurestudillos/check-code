import React from 'react';
// Enrutamiento
import {HashRouter, Route, Routes} from 'react-router-dom';
// Componentes
import Header from '../components/shared/Header';
import Jumbotron from '../components/shared/Jumbotron';
import Footer from '../components/shared/Footer';
import TextFile from './../components/TextFile';

const Router = () => {
    return ( 
        <HashRouter>
            <Header />
            <Jumbotron />
                <Routes>
                    <Route exact path="/" element={<TextFile />} />
                </Routes>
            <Footer />
        </HashRouter>
    );
}
 
export default Router;