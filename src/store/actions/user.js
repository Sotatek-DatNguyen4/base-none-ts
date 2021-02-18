import { userActions } from '../constants/user';

export const login = () => {
  return async (dispatch) => {
    dispatch({ type: userActions.USER_LOGIN_LOADING });
    try {
      const { ethereum } = window;
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const loginUser = accounts.length ? accounts[0] : '';
      dispatch({
        type: userActions.USER_LOGIN_SUCCESS,
        payload: loginUser
      });
    } catch (error) {
      dispatch({
        type: userActions.USER_LOGIN_FAILURE,
        payload: error
      });
    }
  }
};