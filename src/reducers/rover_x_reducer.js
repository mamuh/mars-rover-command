export default function(state = 0, action) {
  switch (action.type) {
    case 'SET_ROVER_X': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
