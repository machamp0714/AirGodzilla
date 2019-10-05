import { CREATE_SUCCESS, CREATE_ERROR } from "../constants/roomTypes";
import httpClient from "../components/Config/axios";

const createSuccess = () => ({
  type: CREATE_SUCCESS
});

const createError = (error) => ({
  type: CREATE_ERROR,
  error
});

export const createRoom = (params) => {
  return (dispatch) => {
    httpClient
      .post("http://localhost:3001/api/v1/rooms", params)
      .then((response) => dispatch(createSuccess(response.data.room)))
      .catch((error) => dispatch(createError(error)));
  };
};
