import axios from 'axios';
import { axiosConfig } from './axiosConfig';

class ChannelApi {
  static fetchAllChannels(token) {
    return (dispatch) => {
      axios.get("/channels", axiosConfig(token))
        .then(response => {
          dispatch({type: "FETCH_ALL_CHANNELS_SUCCESS", payload: response.data.data})
        })
        .catch(error => {
          dispatch({type: "FETCH_ALL_CHANNGELS_FAILURE", payload: error})
        })
    }
  }
}

export default ChannelApi;
