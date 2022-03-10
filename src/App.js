import React from 'react';
// Enrutamiento
import Router from './routes/Router';
// Estilos
import 'antd/dist/antd.min.css';
import 'react-diff-view/style/index.css';
import './App.css';

function App() {

  return (
    <div className="container">
      <Router /> 
    </div>
  );
}

export default App;
