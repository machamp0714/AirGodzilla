import {
  ADD_ROOM_VALUES,
  CREATE_ROOM,
  CREATE_ROOM_ERROR,
  CLEAR_STORE
} from "../constants/roomTypes";
import httpClient from "../components/Config/axios";

const createRoomSuccess = (response) => ({
  type: CREATE_ROOM,
  response
});

const createRoomError = (error) => ({
  type: CREATE_ROOM_ERROR,
  error
});

export const addRoomValues = (values) => ({
  type: ADD_ROOM_VALUES,
  values
});

export const clearRoomStore = () => ({
  type: CLEAR_STORE
});

export const createRoom = (params) => {
  return (dispatch) => {
    httpClient
      .post("http://localhost:3001/api/v1/rooms", params)
      .then((response) => dispatch(createRoomSuccess(response.data)))
      .catch((error) => dispatch(createRoomError(error)));
  };
};
