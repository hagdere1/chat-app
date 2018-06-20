import userInitState from '../initState/userInitState.json';
import axios from 'axios'

function userReducer(state = userInitState, action) {
  switch(action.type) {
    case "LOGIN_USER_SUCCESS":
      document.cookie = "currentUser=" + JSON.stringify(action.payload);
      return Object.assign({}, state, {currentUser: action.payload, loginFailed: false});

    case "LOGIN_USER_FAILURE":
      return Object.assign({}, state, {loginFailed: true});

    case "LOGOUT_USER":
      return Object.assign({}, state, {currentUser: {}, loginFailed: false});

    case "SIGN_UP_USER_SUCCESS":
      document.cookie = "currentUser=" + JSON.stringify(action.payload);
      return Object.assign({}, state, {currentUser: action.payload, signUpFailed: false});

    case "SIGN_UP_USER_FAILURE":
      return Object.assign({}, state, {signUpFailed: true});

    case "SET_CURRENT_USER":
      return Object.assign({}, state, {currentUser: action.currentUser});

    default:
      return state;
  }
}

export default userReducer;
