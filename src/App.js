import React from 'react';
import logo from './logo.svg';
import './App.css';

import Card from './Card.js';
import './Card.css';

import Other from './Other.js';


function App() {
  return (
    <div className="App">
      {/*Render the Card component, this is a comment*/}
      <Card />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World!</h1>
        <h2>Hello react refresh</h2>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://nishaan.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Other/>
    </div>
  );
}

export default App;
