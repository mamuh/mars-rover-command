const DeployRoversReducer = (state = [], action) => {
  switch (action.type) {
    case 'DEPLOY_ROVERS':
      return action.payload
    default:
      return state
  }
}

export default DeployRoversReducer;
