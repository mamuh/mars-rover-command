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
  console.log(rovers)
  return (
    <div style={{ border: "1px solid black", height: "200px" }}>
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


// (gifs.map(({id}) => {
//               return (
//                 <Gif id={id} key={id} setGif={setGif} />
//               );

// function mapStateToProps(state) {
//   // console.log(state.rovers)
//   return { rovers: state.rovers }
// }

export default MovesDisplay
