import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useSelector } from 'react-redux';

class RoverMoves extends Component {
  constructor(props) {
    super(props);
  }

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
