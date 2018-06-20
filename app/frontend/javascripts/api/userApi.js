import axios from 'axios';

class UserApi {
  static signUp(user) {
    return (dispatch) => {
      axios.post("http://localhost:3000/registrations", {user: user})
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
      axios.post("http://localhost:3000/sessions", {user: user})
        .then(response => {
          dispatch({type: "LOGIN_USER_SUCCESS", payload: response.data.data})
        })
        .catch(error => {
          dispatch({type: "LOGIN_USER_FAILURE", payload: error})
        })
    }
  }

  static logout(user) {
    return (dispatch) => {
      axios.delete("http://localhost:3000/session", {user: user})
        .then(response => {
          dispatch({type: "LOGOUT_USER_SUCCESS", payload: true})
        })
        .catch(error => {
          dispatch({type: "LOGOUT_USER_FAILURE", payload: false})
        })
    }
  }
}

export default UserApi;
