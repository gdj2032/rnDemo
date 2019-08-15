/* eslint-disable no-multi-spaces */
/**
 * Created by hpcherry on 2018/4/16.
 */

import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';
import types from '../actions/types';
import { defSongList, defVideoList } from '../utils/defaultData';


const local = combineReducers({
  profile: createReducer({
    [types.localProfile]: (state, payload) => ({ ...state, ...payload }),
  }, {
    name: '',
    age: 20,
  }),
  songList: createReducer({
    [types.songList]: (state, payload) => ({ ...state, ...payload }),
  }, {
    title: defSongList.title,
    list: defSongList.list,
    isShowList: false,
  }),
  videoList: createReducer({
    [types.videoList]: (state, payload) => ({ ...state, ...payload }),
  }, {
    list: defVideoList,
  }),
});

export default local;
