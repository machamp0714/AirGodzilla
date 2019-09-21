import {
  AUTHORIZED_REQUEST,
  AUTHORIZED_SUCCESS,
  AUTHORIZED_ERROR,
  NOT_AUTHORIZED,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
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
        ...state,
        loggedInStatus: false,
        isLoading: true,
        user: {}
      };
    case AUTHORIZED_ERROR:
      console.log("check error", action.error);
      return {
        ...state,
        loggedInStatus: false,
        isLoading: false,
        user: {}
      };
    case AUTHORIZED_SUCCESS:
      console.log("authorized!");
      return {
        ...state,
        loggedInStatus: true,
        isLoading: false,
        user: action.user
      };
    case NOT_AUTHORIZED:
      console.log("not authorized");
      return {
        ...state,
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
        ...state,
        loggedInStatus: true,
        user: action.user
      };
    case "LOGIN_ERROR":
      console.log("login error", action.error);
      return state;
    case "LOGIN_SUCCESS":
      console.log("login success", action.user);
      return {
        ...state,
        loggedInStatus: true,
        user: action.user
      };
    case "LOGOUT_ERROR":
      console.log("logout error", action.error);
      return state;
    case "LOGOUT_SUCCESS":
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
