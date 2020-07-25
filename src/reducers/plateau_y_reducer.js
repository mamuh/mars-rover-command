export default function(state = 3, action) {
  switch (action.type) {
    case 'SET_PLATEAU_SIZE_Y': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
