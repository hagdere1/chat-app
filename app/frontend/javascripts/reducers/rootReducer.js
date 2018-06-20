import {combineReducers} from 'redux';
import userReducer from './userReducer';
import channelReducer from './channelReducer';
import messageReducer from './messageReducer';

const rootReducer = combineReducers({
  user: userReducer,
  channel: channelReducer,
  message: messageReducer
});

export default rootReducer;
