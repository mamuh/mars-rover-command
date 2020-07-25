const roversReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ROVER':
      return [
        ...state, {
          roverId: action.roverId,
          start: action.start,
          movements: action.movements
        }
      ]
    default:
      return state
  }
}

export default roversReducer;


// let nextRoverId = 0
// export default function addRover(start, moves) {
//   return {
//     type: 'ADD_ROVER',
//     roverId: nextRoverId++,
//     start: {},
//     movements: []
//   };
// }
