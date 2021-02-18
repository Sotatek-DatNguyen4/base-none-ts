import { testApiActions } from '../constants/testApi';
import Request from '../../request';

export const testApi = () => {
  return async (dispatch) => {
    dispatch({ type: testApiActions.TEST_API_LOADING });
    try {
      const apiResponse = await Request.get('https://taphuan-api.csdl.edu.vn/faq/search?status[]=approved');
      console.log(111, apiResponse.data);
      dispatch({
        type: testApiActions.TEST_API_SUCCESS,
        payload: apiResponse.data,
      });
    } catch (error) {
      dispatch({
        type: testApiActions.TEST_API_FAILURE,
        payload: error
      });
    }
  }
};