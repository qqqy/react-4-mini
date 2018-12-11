import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './routes.js';
import {Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
      </header> 
          <Link to="/">
            <p>Route 1</p>
          </Link>
          <Link to="/2">
            <p>Route 2</p>
          </Link>
          <Link to="/3">
            <p>Route 3</p>
          </Link>

          {routes}
      </div>
    );
  }
}

export default App;
