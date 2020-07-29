import React from 'react';
import { useSelector } from 'react-redux';

import RoverMoves from './rover_moves';
import Deploy from './deploy';

const MovesDisplay = () => {
  const rovers = useSelector(state => state.rovers)

  return (
    <div className="rovers-div div">
      <h4>ROVERS</h4>
      <div className="rovers-list">
      {
        rovers.map(rover => {
        return (
          <RoverMoves rover={rover} key={rover.roverId} />
        )
      })

      }
      </div>
      <Deploy />
    </div>
  )
}

export default MovesDisplay
