import { createAction } from 'redux-act';

const types = {
  account: createAction('ACCOUNT'),
  logout: createAction('LOGOUT'),
  localProfile: createAction('LOCAL_PROFILE'),
  songList: createAction('SONG_LIST'),
}

export default types;