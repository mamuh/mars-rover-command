export default function(state = 1, action) {
  switch (action.type) {
    case 'SET_PLATEAU_SIZE_X': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
