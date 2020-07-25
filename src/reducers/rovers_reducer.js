const roversReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ROVER':
      return [
        ...state,
        {
          roverId: action.id,
          initialPosition: action.payload,
        }
      ]
  }
}

export default roversReducer;
