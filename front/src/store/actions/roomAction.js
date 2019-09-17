import axios from "axios";
import httpClient from "../../components/Config/axios";
import * as actionTypes from "../../utils/actionTypes";

const createRoomSuccess = (response) => ({
  type: actionTypes.CREATE_ROOM_SUCCESS,
  room: response.room
});

const createRoomFailure = (error) => ({
  type: actionTypes.CREATE_ROOM_FAILURE,
  error
});

export const getRooms = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/api/v1/rooms", { withCredentials: true })
      .then((response) => {
        dispatch({ type: "GET_ROOMS_SUCCESS", rooms: response.data });
      })
      .catch((error) => {
        dispatch({ type: "GET_ROOMS_ERROR", error });
      });
  };
};

export const createRoomRequest = (newRoom) => {
  return (dispatch) => {
    httpClient
      .post("http://localhost:3001/api/v1/rooms", newRoom)
      .then((response) => {
        dispatch(createRoomSuccess(response.data));
      })
      .catch((error) => {
        dispatch(createRoomFailure(error));
      });
  };
};
