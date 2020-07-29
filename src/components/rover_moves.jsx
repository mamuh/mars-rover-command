import React, { Component } from 'react';

class RoverMoves extends Component {

  render() {
    const { roverId, start, movements } = this.props.rover
    return (
      <div className="rover-item">
         <b>Rover {roverId + 1}:</b> start[{start.x},{start.y},{start.direction}] - {movements.length > 0 ? movements.map(movement => movement+" ") : "standing still"}
      </div>
    )
  }
}


export default RoverMoves
