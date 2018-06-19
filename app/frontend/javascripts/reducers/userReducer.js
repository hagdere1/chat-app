import userInitState from '../initState/userInitState.json'

function userReducer(state = userInitState, action) {
  switch(action.type) {
    case "LOGIN_USER_SUCCESS":
      return Object.assign({}, state, {currentUser: action.payload, loginFailed: false});
    case "LOGIN_USER_FAILURE":
      return Object.assign({}, state, {loginFailed: true});
    case "LOGOUT_USER":
      return Object.assign({}, state, {currentUser: {}, loginFailed: false});
    case "SIGN_UP_USER_SUCCESS":
      return Object.assign({}, state, {currentUser: action.payload, signUpFailed: false});
    case "SIGN_UP_USER_FAILURE":
      return Object.assign({}, state, {signUpFailed: true});
    default:
      return state;
  }
}

export default userReducer;
