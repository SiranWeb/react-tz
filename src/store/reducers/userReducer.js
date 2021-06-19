function userReducer(state = {}, action) {
  switch (action.type) {
    case 'user/set':
      return {...state, ...action.payload};
    case 'user/reset':
      return {};
    default:
      return state;
  }
}

export default userReducer;