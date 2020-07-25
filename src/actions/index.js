// TODO : CHANGE TO ES6 FUNCTION FORMAT

export const setPlateauSizeX = event => {
  return {
    type: 'SET_PLATEAU_SIZE_X',
    payload: event.target.value
  };
}

export const setPlateauSizeY = event => {
  return {
    type: 'SET_PLATEAU_SIZE_Y',
    payload: event.target.value
  };
}

let nextRoverId = 0

export default function addRover(start, moves) {
  return {
    type: 'ADD_ROVER',
    roverId: nextRoverId++,
    start: [],
    moves: []
  };
}

// // id as number and moves_list as array of objects
// export default function moveRover(id, moves_list) {
//   return {
//     type: 'MOVE_ROVER',
//     roverId: id,
//     payload: moves_list
//   };
// }


