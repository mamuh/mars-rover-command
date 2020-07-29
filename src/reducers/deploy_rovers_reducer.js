const DeployRoversReducer = (state = [], action) => {
  switch (action.type) {
    case 'DEPLOY_ROVERS':
      return action.positions
    case 'CLEAR_POSITIONS':
      return action.payload
    default:
      return state
  }
}

export default DeployRoversReducer;
