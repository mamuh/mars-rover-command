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
    case 'RESET_ROVERS':
      return action.payload
    default:
      return state
  }
}

export default roversReducer;
