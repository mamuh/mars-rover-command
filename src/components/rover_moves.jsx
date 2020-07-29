import React, { Component } from 'react';

class RoverMoves extends Component {

  render() {
    const { roverId, start, movements } = this.props.rover
    return (
      <div className="rover-item">
         <p>Rover {roverId + 1}: start[{start.x},{start.y},{start.direction}] - {movements.map(movement => movement+" ")}</p>
      </div>
    )
  }
}


export default RoverMoves
