import axios from "axios";
import httpClient from "../../components/Config/axios";
import {
  CREATE_ROOM_FAILURE,
  CREATE_ROOM_SUCCESS,
  UPDATE_ROOM_FAILURE,
  UPDATE_ROOM_SUCCESS,
  GET_ROOMS_FAILURE,
  GET_ROOMS_SUCCESS,
  GET_ROOM_REQUEST,
  GET_ROOM_FAILURE,
  GET_ROOM_SUCCESS
} from "../../utils/actionTypes";

const getRoomRequest = () => ({
  type: GET_ROOM_REQUEST
});

const getRoomSuccess = (room) => ({
  type: GET_ROOM_SUCCESS,
  room: room
});

const getRoomFailure = (error) => ({
  type: GET_ROOM_FAILURE,
  error
});

const createRoomSuccess = (response) => ({
  type: CREATE_ROOM_SUCCESS,
  room: response.room
});

const createRoomFailure = (error) => ({
  type: CREATE_ROOM_FAILURE,
  error
});

const updateRoomSuccess = (response) => ({
  type: UPDATE_ROOM_SUCCESS,
  room: response.room
});

const updateRoomFailure = (error) => ({
  type: UPDATE_ROOM_FAILURE,
  error
});

export const getRooms = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/api/v1/rooms", { withCredentials: true })
      .then((response) => {
        dispatch({ type: GET_ROOMS_SUCCESS, rooms: response.data });
      })
      .catch((error) => {
        dispatch({ type: GET_ROOMS_FAILURE, error });
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

export const updateRoomRequest = (params, room_id) => {
  return (dispatch) => {
    httpClient
      .patch("http://localhost:3001/api/v1/rooms/" + room_id, params)
      .then((response) => {
        dispatch(updateRoomSuccess(response.data));
      })
      .catch((error) => {
        dispatch(updateRoomFailure(error));
      });
  };
};

export const getRoom = (room_id) => {
  return (dispatch) => {
    dispatch(getRoomRequest());
    axios
      .get("http://localhost:3001/api/v1/your_room/" + room_id, {
        withCredentials: true
      })
      .then((response) => {
        dispatch(getRoomSuccess(response.data.room));
      })
      .catch((error) => {
        dispatch(getRoomFailure(error));
      });
  };
};
