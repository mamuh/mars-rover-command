import React, { Component } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deployRovers, resetRovers } from '../actions';

const Deploy = () => {
  const dispatch = useDispatch()
  const plateauX = useSelector(state => state.plateauX)
  const plateauY = useSelector(state => state.plateauY)
  const rovers = useSelector(state => state.rovers)
  const parsedRovers = []
  rovers.map(rover => parsedRovers.push(Object.assign({}, { start: rover.start }, { movements: rover.movements })))

  const plateauAndRoversObj = {
    "plateau": {
      "x": plateauX,
      "y": plateauY
    },
    "rovers": parsedRovers
  }

  // const plateauAndRoversObj = {
  //   "plateau": {
  //     "x": 5,
  //     "y": 6
  //   },
  //   "rovers": [
  //     {
  //       "start": {"x": 1, "y": 0, "direction": "S"},
  //       "movements": ["L", "M", "R"]
  //     },
  //     {
  //       "start": {"x": 0, "y": 1, "direction": "N"},
  //       "movements": ["R", "M", "L"]
  //     }
  //   ]
  // }

  console.log(plateauAndRoversObj)

  return (
    <button onClick={e => {
      dispatch(resetRovers())
      dispatch(deployRovers(plateauAndRoversObj))
    }
    }>
      Deploy squad
    </button>
  )
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ selectCity }, dispatch);
// }

// const mapStateToProps = state => ({
//   plateauX: state.plateauX,
//   plateauY: state.plateauY,
//   rovers: state.rovers
// });

// export default connect(mapStateToProps)(Deploy);

export default Deploy;
