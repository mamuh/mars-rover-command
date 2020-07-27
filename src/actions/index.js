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

let nextRoverId = 0
export const addRover = (start, movements) => {
  return {
    type: 'ADD_ROVER',
    roverId: nextRoverId++,
    start: start,
    movements: movements
  };
}

export const deployRovers = plateauAndRoversObj => {
  return (dispatch) => {
    return axios.post('https://mars-rover-command.herokuapp.com/rover/deploy', plateauAndRoversObj )
    .then(response => {
      console.log(response.data.data);
      dispatch({
        type: 'DEPLOY_ROVERS',
        positions: response.data.data.positions
      })
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
