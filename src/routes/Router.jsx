import React from 'react';
// Enrutamiento
import {HashRouter, Route, Routes} from 'react-router-dom';
// Componentes
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import TextFile from './../components/TextFile';
import Banner from '../components/shared/Banner';

const Router = () => {
    return ( 
        <HashRouter>
            <Header />
            <Banner />
            {/* <Main /> */}
                <Routes>
                    <Route exact path="/" element={<TextFile />} />
                </Routes>
            <Footer />
        </HashRouter>
    );
}
 
export default Router;