import axios from 'axios';
import { axiosConfig } from './axiosConfig';
import { startFetchingCurrentUser } from '../actions/userActions';

class UserApi {
  static signUp(user) {
    return (dispatch) => {
      axios.post("/registrations", {user: user})
        .then(response => {
          dispatch({type: "SIGN_UP_USER_SUCCESS", payload: response.data.data})
        })
        .catch(error => {
          dispatch({type: "SIGN_UP_USER_FAILURE", payload: error})
        })
    }
  }

  static login(user) {
    return (dispatch) => {
      axios.post("/login", {user: user})
        .then(response => {
          dispatch({type: "LOGIN_USER_SUCCESS", payload: response.data.data})
        })
        .catch(error => {
          dispatch({type: "LOGIN_USER_FAILURE", payload: error.response.data.message})
        })
    }
  }

  static logout(token) {
    return (dispatch) => {
      axios.delete("/logout", axiosConfig(token))
        .then(response => {
          dispatch({type: "LOGOUT_USER_SUCCESS", payload: true})
        })
        .catch(error => {
          dispatch({type: "LOGOUT_USER_FAILURE", payload: false})
        })
    }
  }

  static fetchCurrentUser(token) {
    return (dispatch) => {
      dispatch(startFetchingCurrentUser());
      axios.get("/currentuser", axiosConfig(token))
        .then(response => {
          dispatch({type: "FETCH_CURRENT_USER_SUCCESS", payload: response.data.data})
        })
        .catch(error => {
          dispatch({type: "FETCH_CURRENT_USER_FAILURE"})
        });
    }
  }
}

export default UserApi;
