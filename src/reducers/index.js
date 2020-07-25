import { combineReducers } from 'redux';
import PlateauXReducer from './plateau_x_reducer';
import PlateauYReducer from './plateau_y_reducer';
import RoverXReducer from './rover_x_reducer';
import RoverYReducer from './rover_y_reducer';
import RoversReducer from './rovers_reducer';

const rootReducer = combineReducers({
  plateauX: PlateauXReducer,
  plateauY: PlateauYReducer,
  roverX: RoverXReducer,
  roverY: RoverYReducer
});

export default rootReducer;

// state tree:
// plateauSizeX: x,
// plateauSizeY: y,
// roverInitialX: rx,
// roverInitialY: ry,
// roverMoves:
