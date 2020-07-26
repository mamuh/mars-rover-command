import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useSelector } from 'react-redux';

import RoverMoves from './rover_moves';

// class MovesDisplay extends Component {

//   render() {
//     return (
//       <div className="moves-display">

//       </div>
//     );
//   }

// };

const MovesDisplay = () => {
  const rovers = useSelector(state => state.rovers)

  return (
    <div style={{ height: "200px" }} className="rovers-div div">
      <h4>ROVERS</h4>
      {

        rovers.map(rover => {
        return (
          <RoverMoves rover={rover} />
        )
      })

      }
    </div>
  )
}

export default MovesDisplay
