import React, { Component } from 'react';
import logo from './Imagens/logo-barra.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} alt="logo" />
        </div>
      </div>
    ); 
  }
}

export default App;
