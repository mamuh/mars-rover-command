// TODO : CHANGE TO ES6 FUNCTION FORMAT

export default function setPlateauSizeX(x = 1) {
  return {
    type: 'SET_PLATEAU_SIZE_X',
    payload: x
  };
}

export default function setPlateauSizeY(y = 1) {
  return {
    type: 'SET_PLATEAU_SIZE_Y',
    payload: y
  };
}

let nextRoverId = 0

export default function addRover([x, y] = [0, 0]) {
  return {
    type: 'ADD_ROVER',
    roverId: nextRoverId++,
    payload: [x,y]
  };
}

// id as number and moves_list as array of objects
export default function moveRover(id, moves_list) {
  return {
    type: 'MOVE_ROVER',
    roverId: id,
    payload: moves_list
  };
}


