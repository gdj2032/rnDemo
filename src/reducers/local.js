/* eslint-disable no-multi-spaces */
/**
 * Created by hpcherry on 2018/4/16.
 */

import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';
import types from '../actions/types';
import { defSongList, defVideoList, defSongListData } from '../utils/defaultData';

const createSumReducer = actionType => createReducer({
  [actionType]: (state, payload) => state + payload,
}, 0);

const local = combineReducers({
  profile: createReducer({
    [types.localProfile]: (state, payload) => ({ ...state, ...payload }),
  }, {
    name: '',
    age: 20,
  }),
  allMusic: createReducer({
    [types.allMusic]: (state, payload) => ({ ...state, ...payload }),
  }, {
    data: []
  }),
  dailyRecommend: createReducer({
    [types.dailyRecommend]: (state, payload) => ({ ...state, ...payload }),
  }, {
    data: [],
    time: null,
  }),
  songList: createReducer({
    [types.songList]: (state, payload) => ({ ...state, ...payload }),
  }, {
    title: defSongList.title,
    list: defSongList.list,
    isShowList: false,
    slData: defSongListData,
  }),
  videoList: createReducer({
    [types.videoList]: (state, payload) => ({ ...state, ...payload }),
  }, {
    list: defVideoList,
  }),
  loading: createSumReducer(types.loading),
});

export default local;
