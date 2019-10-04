import httpClient from "../components/Config/axios";
import axios from "axios";
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
} from "../constants/authTypes";

const loggedInRequest = () => ({
  type: AUTHORIZED_REQUEST
});

const loggedInSuccess = (user) => ({
  type: AUTHORIZED_SUCCESS,
  user: user
});

const notLoggedIn = () => ({
  type: NOT_AUTHORIZED
});

const loggedInError = (error) => ({
  type: AUTHORIZED_ERROR,
  error
});

const signupSuccess = (newUser) => ({
  type: SIGNUP_SUCCESS,
  user: newUser
});

const signupError = (error) => ({
  type: SIGNUP_ERROR,
  error
});

const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  user: user
});

const loginError = (error) => ({
  type: LOGIN_ERROR,
  error
});

const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
});

const logoutError = (error) => ({
  type: LOGOUT_ERROR,
  error
});

export const loggedIn = () => {
  return (dispatch) => {
    dispatch(loggedInRequest());
    axios
      .get("http://localhost:3001/api/v1/is_logged", { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in) {
          dispatch(loggedInSuccess(response.data.user));
        } else {
          dispatch(notLoggedIn());
        }
      })
      .catch((error) => {
        dispatch(loggedInError(error));
      });
  };
};

export const signup = (newUser) => {
  return (dispatch) => {
    httpClient
      .post("http://localhost:3001/api/v1/signup", newUser)
      .then((response) => {
        dispatch(signupSuccess(response.data.user));
      })
      .catch((error) => {
        dispatch(signupError(error));
      });
  };
};

export const login = (params) => {
  return (dispatch) => {
    httpClient
      .post("http://localhost:3001/api/v1/login", params)
      .then((response) => {
        dispatch(loginSuccess(response.data.user));
      })
      .catch((error) => {
        dispatch(loginError(error));
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    httpClient
      .delete("http://localhost:3001/api/v1/logout")
      .then((response) => {
        dispatch(logoutSuccess());
      })
      .catch((error) => {
        dispatch(logoutError(error));
      });
  };
};
