import channelInitState from '../initState/channelInitState.json'

function channelReducer(state = channelInitState, action) {
  switch(action.type) {
    case "FETCH_ALL_CHANNELS_SUCCESS":
      return Object.assign({}, state, {
        channels: action.payload,
        fetched: true,
        error: false
      });
    case "FETCH_ALL_CHANNGELS_FAILURE":
      return Object.assign({}, state, {
        channels: state.channels,
        fetched: false,
        error: action.error
      });
    case "SELECT_CHANNEL":
      return Object.assign({}, state, {
        selectedChannel: action.id
      });
    default:
      return state;
  }
}

export default channelReducer;
