import { createAction } from 'redux-act';

const types = {
  account: createAction('ACCOUNT'),

  loading: createAction('LOADING'),

  logout: createAction('LOGOUT'),
  localProfile: createAction('LOCAL_PROFILE'),
  songList: createAction('SONG_LIST'),
  videoList: createAction('VIDEO_List'),
  allMusic: createAction('ALL_MUSIC'),
  dailyRecommend: createAction('DAILY_RECOMMEND'),
  lyrObj: createAction('LYR_OBJ'),
}

export default types;