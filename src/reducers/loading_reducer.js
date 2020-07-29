export default function(state = false, action) {
  switch (action.type) {
    case 'LOADING_ROVERS':
      return action.payload
    case 'DONE_LOADING':
      return action.payload
    default: {
      return state;
    }
  }
}
