import React, { Component } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deployRovers } from '../actions';
// class Deploy extends Component {
//   handleClick() {
//     const { plateauX, plateauY, rovers } = this.props
//     console.log(plateauX)
//   }

//   render() {
//     return (
//       <div className="deploy">
//         <button onClick={this.handleClick}>Deploy squad</button>
//       </div>
//     )
//   }
// }

const Deploy = () => {
  const dispatch = useDispatch()
  const plateauX = useSelector(state => state.plateauX)
  const plateauY = useSelector(state => state.plateauY)
  const rovers = useSelector(state => state.rovers)
  const plateauAndRoversObj = {
    "plateau": {
      "x": plateauX,
      "y": plateauY
    },
    "rovers": rovers
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
  //     }
  //   ]
  // }

  console.log(plateauAndRoversObj)

  return (
    <button onClick={e => dispatch(deployRovers(plateauAndRoversObj))}>
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
