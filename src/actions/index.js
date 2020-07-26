// TODO : CHANGE TO ES6 FUNCTION FORMAT

import axios from 'axios';

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

// let nextRoverId = 0
export default function addRover(start, movements) {
  return {
    type: 'ADD_ROVER',
    // roverId: nextRoverId++,
    start: start,
    movements: movements
  };
}

export const deployRovers = plateauAndRoversObj => {
  return (dispatch) => {
    axios.post('https://mars-rover-command.herokuapp.com/rover/deploy', { plateauAndRoversObj } )
    .then(response => {
      console.log(response);
      dispatch({
        type: 'DEPLOY_ROVERS',
        payload: response.data
      })
    })
   .catch(error => {
      console.log(error);
    })
  }
}

