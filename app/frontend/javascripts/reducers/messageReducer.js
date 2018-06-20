import messageInitState from '../initState/messageInitState.json'

function messageReducer(state = messageInitState, action) {
  switch(action.type) {
    case "FETCH_CHANNEL_MESSAGES_SUCCESS":
      return Object.assign({}, state, {
        messages: action.payload,
        fetched: true,
        error: false
      });
    case "FETCH_CHANNEL_MESSAGES_FAILURE":
      return Object.assign({}, state, {
        messages: state.messages,
        fetched: false,
        error: action.error
      });
    case "RECEIVE_MESSAGE":
      return Object.assign({}, state, {
        messages: [...state.messages, action.message]
      });
    default:
      return state;
  }
}

export default messageReducer;
