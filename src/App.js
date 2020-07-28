import React from 'react';
import './stylesheets/application.scss'

import SetPlateau from './components/set_plateau';
import MovesDisplay from './components/moves_display';
import Plateau from './components/plateau';
import Deploy from './components/deploy';
import AddRover from './components/set_rovers_form';


function App() {
  return (
    <div className="App">
      <div className="left-side">
        <h1>Mars rover command</h1>
        <SetPlateau />
        <div className="rover-pannel">
          <AddRover />
          <MovesDisplay />
        </div>
        <Deploy />
      </div>
      <div className="right-side">
        <Plateau />
      </div>
    </div>
  );
}

export default App;

// install prop-types
