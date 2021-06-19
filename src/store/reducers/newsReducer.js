function newsReducer(state = {}, action) {
  switch (action.type) {
    case 'news/set':
      return {...state, list: action.payload}
    default:
      return state;
  }
}

export default newsReducer;