import {
  AUTHORIZED_REQUEST,
  AUTHORIZED_SUCCESS,
  AUTHORIZED_ERROR,
  NOT_AUTHORIZED,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR
} from "../../utils/actionTypes";

const initState = {
  loggedInStatus: false,
  isLoading: false,
  user: {}
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case AUTHORIZED_REQUEST:
      return {
        loggedInStatus: false,
        isLoading: true,
        user: {}
      };
    case AUTHORIZED_ERROR:
      console.log("check error", action.error);
      return {
        loggedInStatus: false,
        isLoading: false,
        user: {}
      };
    case AUTHORIZED_SUCCESS:
      console.log("authorized!");
      return {
        loggedInStatus: true,
        isLoading: false,
        user: action.user
      };
    case NOT_AUTHORIZED:
      console.log("not authorized");
      return {
        loggedInStatus: false,
        isLoading: false,
        user: {}
      };
    case SIGNUP_ERROR:
      console.log("sign up error", action.error);
      return state;
    case SIGNUP_SUCCESS:
      console.log("sign up success");
      return {
        loggedInStatus: true,
        user: action.user
      };
    case LOGIN_ERROR:
      console.log("login error", action.error);
      return state;
    case LOGIN_SUCCESS:
      console.log("login success", action.user);
      return {
        ...state,
        loggedInStatus: true,
        user: action.user
      };
    case LOGOUT_ERROR:
      console.log("logout error", action.error);
      return state;
    case LOGOUT_SUCCESS:
      console.log("logout success");
      return {
        ...state,
        loggedInStatus: false,
        user: {}
      };
    default:
      return state;
  }
};

export default authReducer;
