import React from 'react';
import './App.css';

//import Card from './Card.js';
//import './Card.css';

import InputEvents from './events/InputEvents';
//import MovementEvents from './events/MovementEvents';
import './events/Events.css';


function App() {
  return (
    <div className="App">
      {/*Render the Card component, this is a comment*/}
      {/*<Card />
      <Card />
      <Card />*/}
      <InputEvents/>
      {/*<MovementEvents/>*/}
    </div>
  );
}

export default App;
