import React, { Component } from 'react';

class RoverMoves extends Component {

  removeRover(e) {
    console.log(e.target.innerText)
  }

  render() {
    const { roverId, start, movements } = this.props.rover
    return (
      <div className="rover-item">
        <p onClick={this.removeRover}>
          <b>Rover {roverId + 1}:</b> start[{start.x},{start.y},{start.direction}] - {movements.length > 0 ? movements.map(movement => movement+" ") : "standing still"}
        </p>
      </div>
    )
  }
}


export default RoverMoves
