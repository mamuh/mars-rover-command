export default function(state = 0, action) {
  switch (action.type) {
    case 'SET_ROVER_Y': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
