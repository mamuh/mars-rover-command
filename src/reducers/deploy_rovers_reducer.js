const DeployRoversReducer = (state = [], action) => {
  switch (action.type) {
    case 'DEPLOY_ROVERS':
      return action.positions
    default:
      return state
  }
}

export default DeployRoversReducer;
