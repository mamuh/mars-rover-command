import React from 'react';
import './App.css';

import SetPlateau from './components/set_plateau';
import SetRovers from './components/set_rovers';
import MovesDisplay from './components/moves_display';

function App() {
  return (
    <div className="App">
      <h1>Mars rover command!</h1>
      <SetPlateau />
      <SetRovers />
      <MovesDisplay />
    </div>
  );
}

export default App;
