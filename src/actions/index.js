import axios from 'axios';
import store from '../store';

export const setPlateauSizeX = event => {
  return {
    type: 'SET_PLATEAU_SIZE_X',
    payload: parseInt(event.target.value, 10)
  };
}

export const setPlateauSizeY = event => {
  return {
    type: 'SET_PLATEAU_SIZE_Y',
    payload: parseInt(event.target.value, 10)
  };
}

let nextRoverId = 0
export const addRover = (start, movements) => {
  return {
    type: 'ADD_ROVER',
    roverId: nextRoverId++,
    start: start,
    movements: movements
  };
}

export const beginLoad = () => {
  return {
    type: 'LOADING_ROVERS',
    payload: true
  }
}

export const finishLoad = () => {
  return {
    type: 'DONE_LOADING',
    payload: false
  }
}

export const deployRovers = plateauAndRoversObj => {
  return (dispatch) => {
    store.dispatch(beginLoad())
    return axios.post('https://mars-rover-command.herokuapp.com/rover/deploy', plateauAndRoversObj )
    .then(response => {
      console.log(response.data.data);
      dispatch({
        type: 'DEPLOY_ROVERS',
        positions: response.data.data.positions
      })
      store.dispatch(finishLoad())
    })
   .catch(error => {
      console.log(error);
    })
  }
}

export const resetRovers = () => {
  return {
    type: 'RESET_ROVERS',
    payload: []
  }
}

export const clearPositions = () => {
  return {
    type: 'CLEAR_POSITIONS',
    payload: []
  }
}
