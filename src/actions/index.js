// TODO : CHANGE TO ES6 FUNCTION FORMAT

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
export default function addRover(start, movements) {
  return {
    type: 'ADD_ROVER',
    roverId: nextRoverId++,
    start: start,
    movements: movements
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


