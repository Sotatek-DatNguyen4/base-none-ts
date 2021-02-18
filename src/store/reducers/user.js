import { userActions } from '../constants/user';

const initialState = {
  data: '',
  loading: false,
  error: ''
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case userActions.USER_LOGIN_LOADING: {
      return {
        ...state,
        loading: true
      }
    } 

    case userActions.USER_LOGIN_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false
      }
    }

    case userActions.USER_LOGIN_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    }

    default: {
      return state;
    }
  }
};

export default userReducer;
