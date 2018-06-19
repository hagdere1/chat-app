import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  reducer1: function(state = {initState: []}, action) {
    return state;
  }
});

export default rootReducer;
