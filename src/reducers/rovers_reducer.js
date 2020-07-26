const roversReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ROVER':
      return [
        ...state, {
          // roverId: action.roverId,
          start: action.start,
          movements: action.movements
        }
      ]
    default:
      return state
  }
}

export default roversReducer;
