import axios from 'axios';
import { axiosConfig } from './axiosConfig';

class MessageApi {
  static createMessage(message, channelId, token) {
    return (dispatch) => {
      axios.post("/channels/" + channelId + "/messages/", message, axiosConfig(token))
        .then(response => {
          dispatch({type: "CREATE_MESSAGE_SUCCESS", payload: response.data.data})
        })
        .catch(error => {
          dispatch({type: "CREATE_MESSAGE_FAILURE", payload: error})
        })
    }
  }

  static fetchChannelMessages(channelId, token) {
    return (dispatch) => {
      axios.get("/channels/" + channelId + "/messages", axiosConfig(token))
        .then(response => {
          dispatch({type: "FETCH_CHANNEL_MESSAGES_SUCCESS", payload: response.data.data})
        })
        .catch(error => {
          dispatch({type: "FETCH_CHANNEL_MESSAGES_FAILURE", payload: error})
        })
    }
  }
}

export default MessageApi;
