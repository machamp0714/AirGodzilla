import httpClient from "../../components/Config/axios";
import axios from "axios";

export const checkLoggedIn = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/api/v1/is_logged", { withCredentials: true })
      .then((response) => {
        dispatch({ type: "CHECK_AUTH_SUCCESS", user: response.data });
      })
      .catch((error) => {
        dispatch({ type: "CHECK_AUTH_ERROR", error });
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
