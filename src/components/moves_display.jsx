import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useSelector } from 'react-redux';

import RoverMoves from './rover_moves';

const MovesDisplay = () => {
  const rovers = useSelector(state => state.rovers)

  return (
    <div className="rovers-div div">
      <h4>ROVERS</h4>
      {
        rovers.map(rover => {
        return (
          <RoverMoves rover={rover} key={rover.roverId} />
        )
      })

      }
    </div>
  )
}

export default MovesDisplay
