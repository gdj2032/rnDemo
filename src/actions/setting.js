import types from './types';

const UPDATE = (type, value) => (dispatch) => {
  dispatch(types[type]({...value}));
};

export const account = value => dispatch => dispatch(UPDATE('account', value));

export const logout = value => dispatch => dispatch(UPDATE('logout', value));

export const localProfile = value => dispatch => dispatch(UPDATE('localProfile', value));
