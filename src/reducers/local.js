/* eslint-disable no-multi-spaces */
import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';
import types from '../actions/types';
import { defSongList, defVideoList, defSongListData, defDailyInfo } from '../utils/defaultData';
import allMusic from '../utils/AllMusic'

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
    data: allMusic,
    current: [],//{id: ..., times:, currentTime: }
  }),
  dailyRecommend: createReducer({
    [types.dailyRecommend]: (state, payload) => ({ ...state, ...payload }),
  }, {
    data: [],
    time: null,
    info: defDailyInfo,
  }),
  songList: createReducer({
    [types.songList]: (state, payload) => ({ ...state, ...payload }),
  }, {
    title: defSongList.title,
    list: defSongList.list,
    isShowList: false,
  }),
  lyrObj: createReducer({
    [types.lyrObj]: (state, payload) => ({ ...state, ...payload }),
  }, {
    data: []//{id: xxx, lyr: [....]}
  }),
  videoList: createReducer({
    [types.videoList]: (state, payload) => ({ ...state, ...payload }),
  }, {
    list: defVideoList,
  }),
  download: createReducer({
    [types.download]: (state, payload) => ({ ...state, ...payload }),
  }, {
    data: [],//{ id:, path, size, }
  }),
  singing: createReducer({
    [types.singing]: (state, payload) => ({ ...state, ...payload }),
  }, {
    singingData: defSongList.list[0],//正在播放的歌单信息
    currentSong: allMusic[0], //当前播放的歌曲
  }),
  loading: createSumReducer(types.loading),
});

export default local;
