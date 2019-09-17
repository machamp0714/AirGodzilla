import * as actionTypes from "../../utils/actionTypes";

const initState = {
  loggedInStatus: false,
  isLoading: false,
  user: {}
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.AUTHORIZED_REQUEST:
      return {
        ...state,
        loggedInStatus: false,
        isLoading: true,
        user: {}
      };
    case actionTypes.AUTHORIZED_ERROR:
      console.log("check error", action.error);
      return {
        ...state,
        loggedInStatus: false,
        isLoading: false,
        user: {}
      };
    case actionTypes.AUTHORIZED:
      console.log("authorized!");
      return {
        ...state,
        loggedInStatus: true,
        isLoading: false,
        user: action.user
      };
    case actionTypes.NOT_AUTHORIZED:
      console.log("not authorized");
      return {
        ...state,
        loggedInStatus: false,
        isLoading: false,
        user: {}
      };
    case "SIGN_UP_ERROR":
      console.log("sign up error", action.error);
      return state;
    case "SIGN_UP_SUCCESS":
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
