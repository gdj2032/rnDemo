import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';
import local from './local';
import types from '../actions/types';
import { reduxStore } from '../utils/utils';


const appReducer = combineReducers({
  account: createReducer({
    [types.account]: (state, payload) => ({ ...state, ...payload }),
  }, {
    status: false,
  }),
  local,
});

const rootReducer = (state, action) => {
  if(state){
    reduxStore.getState = state;
  }
  return appReducer({...state}, {...action});
};


export default rootReducer;
