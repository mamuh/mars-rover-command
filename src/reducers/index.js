import { combineReducers } from 'redux';
import PlateauXReducer from './plateau_x_reducer';
import PlateauYReducer from './plateau_y_reducer';
import RoversReducer from './rovers_reducer';

import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  plateauX: PlateauXReducer,
  plateauY: PlateauYReducer,
  rovers: RoversReducer,
  form: formReducer
});

export default rootReducer;

// state tree:
// plateauSizeX: x,
// plateauSizeY: y,
// roverInitialX: rx,
// roverInitialY: ry,
// roverMoves:
