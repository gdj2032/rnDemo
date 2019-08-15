import { createAction } from 'redux-act';

const types = {
  account: createAction('ACCOUNT'),
  logout: createAction('LOGOUT'),
  localProfile: createAction('LOCAL_PROFILE'),
  songList: createAction('SONG_LIST'),
  videoList: createAction('VIDEO_List'),
}

export default types;