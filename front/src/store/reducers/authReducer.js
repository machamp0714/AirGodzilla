const initState = {
  loggedInStatus: false,
  user: {}
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "CHECK_AUTH_ERROR":
      console.log("check error", action.error);
      return state;
    case "CHECK_AUTH_SUCCESS":
      console.log("check success");
      return {
        ...state,
        loggedInStatus: true,
        user: action.user
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
    default:
      return state;
  }
};

export default authReducer;
