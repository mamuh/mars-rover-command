import { combineReducers } from 'redux';
import PlateauXReducer from './plateau_x_reducer';
import PlateauYReducer from './plateau_y_reducer';
import RoversReducer from './rovers_reducer';
import DeployRoversReducer from './deploy_rovers_reducer';
import LoadingReducer from './loading_reducer';

const rootReducer = combineReducers({
  plateauX: PlateauXReducer,
  plateauY: PlateauYReducer,
  rovers: RoversReducer,
  positions: DeployRoversReducer,
  isLoading: LoadingReducer
});

export default rootReducer;
