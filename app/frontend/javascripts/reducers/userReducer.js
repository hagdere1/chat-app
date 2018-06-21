import userInitState from '../initState/userInitState.json';
import axios from 'axios'

function userReducer(state = userInitState, action) {
  switch(action.type) {
    case "LOGIN_USER_SUCCESS":
      document.cookie = "currentUser=" + (typeof action.payload !== "string" ? JSON.stringify(action.payload) : action.payload);
      return Object.assign({}, state, {currentUser: action.payload, loginFailed: false});

    case "LOGIN_USER_FAILURE":
      return Object.assign({}, state, {loginFailed: true});

    case "LOGOUT_USER_SUCCESS":
      document.cookie = "currentUser=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      return Object.assign({}, state, {currentUser: {}});

    case "SIGN_UP_USER_SUCCESS":
      document.cookie = "currentUser=" + (typeof action.payload !== "string" ? JSON.stringify(action.payload) : action.payload);
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
