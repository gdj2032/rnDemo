/* eslint-disable no-multi-spaces */
/**
 * Created by hpcherry on 2018/4/16.
 */

import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';
import types from '../actions/types';


const local = combineReducers({
  profile: createReducer({
    [types.localProfile]: (state, payload) => ({ ...state, ...payload }),
  }, {
    name: '',
    age: 20,
  }),
});

export default local;
