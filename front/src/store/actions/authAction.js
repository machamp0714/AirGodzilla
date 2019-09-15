import httpClient from "../../components/Config/axios";
import axios from "axios";

export const checkLoggedIn = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/api/v1/is_logged", { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in) {
          dispatch({ type: "AUTHORIZED", user: response.data.user });
        } else {
          dispatch({ type: "NOT_AUTHORIZED" });
        }
      })
      .catch((error) => {
        dispatch({ type: "AUTHORIZED_ERROR", error });
      });
  };
};

export const signup = (newUser) => {
  return (dispatch) => {
    httpClient
      .post("http://localhost:3001/api/v1/signup", newUser)
      .then((response) => {
        dispatch({ type: "SIGN_UP_SUCCESS", user: response.data });
      })
      .catch((error) => {
        dispatch({ type: "SIGN_UP_ERROR", error });
      });
  };
};

export const login = (params) => {
  return (dispatch) => {
    httpClient
      .post("http://localhost:3001/api/v1/login", params)
      .then((response) => {
        dispatch({ type: "LOGIN_SUCCESS", user: response.data.user });
      })
      .catch((error) => {
        dispatch({ type: "LOGIN_ERROR", error });
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    httpClient
      .delete("http://localhost:3001/api/v1/logout")
      .then((response) => {
        dispatch({ type: "LOGOUT_SUCCESS" });
      })
      .catch((error) => {
        dispatch({ type: "LOGOUT_ERROR", error });
      });
  };
};
