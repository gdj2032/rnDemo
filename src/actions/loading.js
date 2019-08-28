import types from './types';

export const doLoading = () => (dispatch) => {
  dispatch(types.loading(1));
};
export const disableLoading = () => (dispatch) => {
  dispatch(types.loading(-1));
};
