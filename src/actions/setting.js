import types from './types';

const UPDATE = (type, value) => (dispatch) => {
  dispatch(types[type]({...value}));
};

export const UpdateAccount = value => dispatch => dispatch(UPDATE('account', value));

export const UpdateLogout = value => dispatch => dispatch(UPDATE('logout', value));

export const UpdateLocalProfile = value => dispatch => dispatch(UPDATE('localProfile', value));

export const UpdateSongList = value => dispatch => dispatch(UPDATE('songList', value));

export const UpdateVideoList = value => dispatch => dispatch(UPDATE('videoList', value));

export const UpdateAllMusic = value => dispatch => dispatch(UPDATE('allMusic', value));

export const UpdateDailyRecommend = value => dispatch => dispatch(UPDATE('dailyRecommend', value));

export const UpdateLyrObj = value => dispatch => dispatch(UPDATE('lyrObj', value));

export const UpdateDownload = value => dispatch => dispatch(UPDATE('download', value));

export const UpdateSinging = value => dispatch => dispatch(UPDATE('singing', value));
