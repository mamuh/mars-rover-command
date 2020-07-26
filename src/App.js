import React from 'react';
import './stylesheets/application.scss'

import SetPlateau from './components/set_plateau';
import MovesDisplay from './components/moves_display';
import Plateau from './components/plateau';
import Deploy from './components/deploy';
import AddRover from './components/third_try_form';


function App() {
  return (
    <div className="App">
      <h1>Mars rover command</h1>
      <SetPlateau />
      <div className="rover-pannel">
        <AddRover />
        <MovesDisplay />
      </div>
      <Deploy />
      <Plateau />
    </div>
  );
}

export default App;

// install prop-types
